# Generated by Django 4.0.1 on 2022-01-15 23:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_remove_category_test'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='emoji',
            field=models.CharField(max_length=100),
        ),
    ]