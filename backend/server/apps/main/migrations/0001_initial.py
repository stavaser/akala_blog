# Generated by Django 4.0.1 on 2022-01-15 22:58

import apps.main.models
import ckeditor.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=160)),
                ('emoji', models.CharField(max_length=1)),
                ('description', models.TextField(max_length=360)),
            ],
        ),
        migrations.CreateModel(
            name='ArticleSection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('section', models.CharField(max_length=160)),
                ('article_category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='article_categories', to='main.category')),
            ],
        ),
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=160)),
                ('text', ckeditor.fields.RichTextField()),
                ('readingTime', models.PositiveSmallIntegerField(blank=True)),
                ('date', models.DateTimeField(auto_now=True)),
                ('image', models.ImageField(upload_to=apps.main.models.article_image_path)),
                ('article_section', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='article_sections', to='main.articlesection')),
            ],
        ),
    ]
