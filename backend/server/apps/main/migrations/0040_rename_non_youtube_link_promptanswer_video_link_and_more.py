# Generated by Django 4.0.1 on 2022-01-25 17:49

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0039_promptanswer_is_youtube_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='promptanswer',
            old_name='non_youtube_link',
            new_name='video_link',
        ),
        migrations.RemoveField(
            model_name='promptanswer',
            name='youtube_link',
        ),
        migrations.AlterField(
            model_name='article',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2022, 1, 25, 17, 49, 14, 367099)),
        ),
    ]
