from django.db import models
from ckeditor.fields import RichTextField 


class Category(models.Model):
    category = models.CharField(max_length=160)
    emoji = models.CharField(max_length=1)
    description = models.TextField(max_length=360)

class ArticleSection(models.Model):
    article_category = models.ForeignKey(Category, related_name="article_categories", on_delete=models.CASCADE)
    section = models.CharField(max_length=160)

def article_image_path(instance, filename):
    return 'media/articles/article_{0}/{1}'.format(instance.article.id, filename)

class Article(models.Model):
    article_section = models.ForeignKey(ArticleSection, related_name="article_sections", on_delete=models.CASCADE)
    title = models.CharField(max_length=160)
    text = RichTextField()
    readingTime = models.PositiveSmallIntegerField(blank=True)
    date = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to=article_image_path, height_field=None, width_field=None)