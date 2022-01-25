# Generated by Django 4.0.1 on 2022-01-25 21:12

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0049_alter_article_date_alter_promptanswer_prompt'),
    ]

    operations = [
        migrations.AddField(
            model_name='promptanswer',
            name='local_link',
            field=models.CharField(blank=True, editable=False, max_length=160, null=True),
        ),
        migrations.AlterField(
            model_name='article',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2022, 1, 25, 21, 12, 47, 347734)),
        ),
    ]