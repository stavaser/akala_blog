# Generated by Django 4.0.1 on 2022-01-25 16:30

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0030_remove_promptanswer_thumbnail_alter_article_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='promptanswer',
            name='video',
        ),
        migrations.AlterField(
            model_name='article',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2022, 1, 25, 16, 30, 47, 805567)),
        ),
    ]
