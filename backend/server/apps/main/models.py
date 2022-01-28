# import readtime
from django.db import models
from django.db.models import Max
from ckeditor.fields import RichTextField 
from datetime import datetime
from django.core.validators import FileExtensionValidator
import re
from django.template.defaultfilters import slugify
import urllib.request
import requests
from pytube import YouTube
from pytube.helpers import safe_filename, target_directory
import os
from urllib.error import HTTPError
from pytube import extract, request


def title_case(s):
    return re.sub(r"[A-Za-z]+('[A-Za-z]+)?",
    lambda word: word.group(0).capitalize(), s)

def get_reading_time(num):
    return 10

# def get_youtube_id(url):
#     u_pars = urlparse(url)
#     quer_v = parse_qs(u_pars.query).get('v')
#     if quer_v:
#         return quer_v[0]
#     pth = u_pars.path.split('/')
#     if pth:
#         return pth[-1]

def get_order_default():
    return Category.objects.all().aggregate(Max('order'))['order__max']+1

class Category(models.Model):
    category = models.CharField(max_length=160)
    slug = models.SlugField(max_length=160, unique=True, editable=False)
    emoji = models.CharField(max_length=100)
    description = models.TextField(max_length=360)
    is_visible = models.BooleanField(default=True)
    order = models.PositiveSmallIntegerField(default=get_order_default)

    def __str__(self):
        return self.category

    def save(self, *args, **kwargs):
        self.category = title_case(self.category)
        self.slug = slugify(self.category)
        super(Category, self).save(*args, **kwargs)
    
    class Meta:
        verbose_name_plural = "categories"
        ordering = ['order']


class ArticleSection(models.Model):
    category = models.ForeignKey(Category, related_name="sections", on_delete=models.CASCADE)
    section = models.CharField(max_length=160)
    slug = models.SlugField(max_length=160, unique=True, editable=False)
    is_visible = models.BooleanField(default=True)
    order = models.PositiveSmallIntegerField(default=1)
    
    def save(self, *args, **kwargs):
        self.section = title_case(self.section)
        self.slug = slugify(self.section)
        super(ArticleSection, self).save(*args, **kwargs)
    
    def __str__(self):
        return self.category.category + " / " + self.section

    class Meta:
        verbose_name_plural = "sections"


def article_image_path(self, filename):
    return 'media/articles/article_{0}/{1}'.format(self.id, filename)

class Article(models.Model):
    section = models.ForeignKey(ArticleSection, related_name="articles", on_delete=models.CASCADE)
    title = models.CharField(max_length=160)
    slug = models.SlugField(max_length=160, unique=True, editable=False)
    text = RichTextField()
    readtime = models.PositiveSmallIntegerField(blank=True, null=True)
    date = models.DateTimeField()
    str_date = models.CharField(max_length=160, editable=False, blank=True, null=True)
    author = models.CharField(max_length=160, blank=True, null=True)
    image = models.ImageField(upload_to=article_image_path, height_field=None, width_field=None, blank=True, null=True)
    image_credits = models.CharField(max_length=160, blank=True, null=True)
    is_visible = models.BooleanField(default=True)
    view_count = models.IntegerField(editable=False, default=0)

    def get_readtime(self):
        # result = readtime.of_html(self.text)
        # return result.text 
        return 2

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        self.readtime = self.get_readtime()
        self.str_date = self.date.strftime("%d %b, %Y")
        if self.id is None:
            saved_image = self.image
            self.image = None
            super(Article, self).save(*args, **kwargs)
            self.image = saved_image
            if 'force_insert' in kwargs:
                kwargs.pop('force_insert')

        super(Article, self).save(*args, **kwargs)

    def __str__(self):
        return self.section.category.category + " / " + self.section.section + " / " + self.title + " / " + self.date.strftime("%d %b, %Y")


def prompt_video_path(self, dir = True):
    if dir:
        return 'media/prompts/prompt_{0}/answer_{1}/'.format(self.prompt.id, self.id)
    else:
        return 'media/prompts/prompt_{0}/answer_{1}/video.mp4'.format(self.prompt.id, self.id)

def prompt_image_path(self):
    return 'media/prompts/prompt_{0}/answer_{1}/'.format(self.prompt.id, self.id)


class Prompt(models.Model):
    title = models.CharField(max_length=160)

    def __str__(self):
        return self.title

def download_video(self):
    file_name = os.path.join(target_directory(prompt_video_path(self)), "video.mp4")
    rsp = urllib.request.urlopen(self.video_link)
    with open(file_name,'wb') as f:
        f.write(rsp.read())
    return prompt_video_path(self) + "video.mp4"

def get_thumbnail(self, url):
    file_name = os.path.join(target_directory(prompt_image_path(self)), "thumbnail.jpg")
    rsp = urllib.request.urlopen(url)
    with open(file_name,'wb') as f:
        f.write(rsp.read())
    return prompt_video_path(self) + "thumbnail.jpg"

class PromptAnswer(models.Model):
    prompt = models.ForeignKey(Prompt, on_delete=models.CASCADE, related_name="answers")
    submitted_by = models.CharField(max_length=160)
    is_youtube = models.BooleanField(default=True)
    video_link = models.CharField(max_length=160, blank=True, null=True)
    thumbnail_link = models.CharField(max_length=160, blank=True, null=True)
    # thumbnail = models.ImageField(upload_to=prompt_image_path, height_field=None, width_field=None, blank=True, null=True)
    # video_file = models.FileField(upload_to=prompt_video_path, blank=True, null=True, validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])])
    
    def __str__(self):
        return '{0} - {1}'.format(self.submitted_by, self.prompt.title)
    
    def save(self, *args, **kwargs):
        if self.is_youtube:
            self.thumbnail = YouTube(self.video_link).thumbnail_url

        super(PromptAnswer, self).save(*args, **kwargs)


def podcast_image_path(self, filename):
    return 'media/podcasts/podcast_{0}_{1}'.format(self.id, filename)


class Podcast(models.Model):
    PROVIDER_CHOICES = (
        ("APPLE", "Apple Podcasts"),
        ("SPOTIFY", "Spotify"),
        ("IHEART", "iHeart"),
        ("STITCHER", "Stitcher"),
    )

    title = models.CharField(max_length=160)
    image = models.CharField(max_length=160)
    slug = models.SlugField(max_length=160, unique=True, editable=False)
    description = models.TextField(max_length=310)
    favorite_link = models.CharField(max_length=160)
    image = models.ImageField(upload_to=podcast_image_path, height_field=None, width_field=None, blank=True, null=True)
    provider = models.CharField(max_length=50,
                  choices=PROVIDER_CHOICES,
                  default="APPLE")

    def __str__(self):
        return '{0}'.format(self.title)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        if self.id is None:
            saved_image = self.image
            self.image = None
            super(Podcast, self).save(*args, **kwargs)
            self.image = saved_image
            if 'force_insert' in kwargs:
                kwargs.pop('force_insert')
        
        super(Podcast, self).save(*args, **kwargs)