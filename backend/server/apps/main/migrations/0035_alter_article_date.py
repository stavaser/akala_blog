# Generated by Django 4.0.1 on 2022-01-25 17:18

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0034_rename_video_promptanswer_video_file_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2022, 1, 25, 17, 18, 13, 133643)),
        ),
    ]
