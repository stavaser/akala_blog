# Generated by Django 4.0.1 on 2022-01-15 22:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='test',
            field=models.TextField(blank=True, max_length=360),
        ),
    ]
