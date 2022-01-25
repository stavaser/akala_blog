# Generated by Django 4.0.1 on 2022-01-25 21:53

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0051_alter_article_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='promptanswer',
            name='local_link',
        ),
        migrations.AddField(
            model_name='promptanswer',
            name='need_download',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='promptanswer',
            name='thumbnail_link',
            field=models.CharField(blank=True, max_length=160, null=True),
        ),
        migrations.AlterField(
            model_name='article',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2022, 1, 25, 21, 53, 51, 490495)),
        ),
    ]