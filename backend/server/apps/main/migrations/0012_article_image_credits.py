# Generated by Django 4.0.1 on 2022-01-16 01:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0011_alter_article_author_alter_article_readingtime'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='image_credits',
            field=models.CharField(blank=True, max_length=160, null=True),
        ),
    ]
