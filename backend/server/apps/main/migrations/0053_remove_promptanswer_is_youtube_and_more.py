# Generated by Django 4.0.1 on 2022-01-25 22:04

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0052_remove_promptanswer_local_link_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='promptanswer',
            name='is_youtube',
        ),
        migrations.RemoveField(
            model_name='promptanswer',
            name='need_download',
        ),
        migrations.RemoveField(
            model_name='promptanswer',
            name='thumbnail',
        ),
        migrations.RemoveField(
            model_name='promptanswer',
            name='video_file',
        ),
        migrations.AlterField(
            model_name='article',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2022, 1, 25, 22, 4, 42, 969427)),
        ),
    ]
