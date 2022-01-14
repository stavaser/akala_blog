from django.db import models
from ckeditor.fields import RichTextField 

class Article(models.Model):
    title = models.CharField(max_length=160)
    text = RichTextField()
