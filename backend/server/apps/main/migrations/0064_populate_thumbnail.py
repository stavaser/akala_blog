import autoslug.fields
from django.db import migrations
from apps.main.models import PromptAnswer
from pytube import YouTube

class Migration(migrations.Migration):

    dependencies = [
        ('main', '0063_populate_slug'),
    ]

    def update(apps, schema_editor):
        for row in PromptAnswer.objects.all():
            if row.is_youtube:
                row.thumbnail_link = YouTube(row.video_link).thumbnail_url
                row.save()
    
    
    operations = [
        migrations.RunPython(update),
    ]
