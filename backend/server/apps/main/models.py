# import readtime
from django.db import models
from ckeditor.fields import RichTextField 
from datetime import datetime
import re

def title_case(s):
    return re.sub(r"[A-Za-z]+('[A-Za-z]+)?",
    lambda word: word.group(0).capitalize(), s)

def get_reading_time(num):
    return 10

class Category(models.Model):
    category = models.CharField(max_length=160)
    emoji = models.CharField(max_length=100)
    description = models.TextField(max_length=360)
    is_visible = models.BooleanField(default=True)

    def __str__(self):
        return self.category

    def save(self, *args, **kwargs):
        self.category = title_case(self.category)
        super(Category, self).save(*args, **kwargs)
    
    class Meta:
        verbose_name_plural = "categories"


class ArticleSection(models.Model):
    category = models.ForeignKey(Category, related_name="sections", on_delete=models.CASCADE)
    section = models.CharField(max_length=160)
    is_visible = models.BooleanField(default=True)
    
    def save(self, *args, **kwargs):
        self.section = title_case(self.section)
        super(ArticleSection, self).save(*args, **kwargs)
    
    def __str__(self):
        return self.category.category + " / " + self.section

    class Meta:
        verbose_name_plural = "sections"


def article_image_path(self, filename):
    return 'media/articles/article_{0}/{1}'.format(self.id, filename)

class Article(models.Model):
    section = models.ForeignKey(ArticleSection, on_delete=models.CASCADE)
    title = models.CharField(max_length=160)
    text = RichTextField()
    readtime = models.PositiveSmallIntegerField(blank=True, null=True)
    date = models.DateTimeField(default=datetime.now())
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
