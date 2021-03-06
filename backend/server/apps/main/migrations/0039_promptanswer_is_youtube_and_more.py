# Generated by Django 4.0.1 on 2022-01-25 17:40

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0038_alter_article_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='promptanswer',
            name='is_youtube',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='promptanswer',
            name='non_youtube_link',
            field=models.CharField(blank=True, max_length=160, null=True),
        ),
        migrations.AlterField(
            model_name='article',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2022, 1, 25, 17, 40, 43, 776421)),
        ),
    ]
