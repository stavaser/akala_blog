# Generated by Django 4.0.1 on 2022-01-25 16:26

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0029_alter_article_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='promptanswer',
            name='thumbnail',
        ),
        migrations.AlterField(
            model_name='article',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2022, 1, 25, 16, 26, 3, 941423)),
        ),
    ]