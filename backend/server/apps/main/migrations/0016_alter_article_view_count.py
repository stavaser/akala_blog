# Generated by Django 4.0.1 on 2022-01-16 15:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0015_rename_readingtime_article_readtime_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='view_count',
            field=models.IntegerField(default=0),
        ),
    ]
