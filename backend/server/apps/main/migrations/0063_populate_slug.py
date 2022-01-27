import autoslug.fields
from django.db import migrations
from django.template.defaultfilters import slugify
from apps.main.models import ArticleSection

class Migration(migrations.Migration):

    dependencies = [
        ('main', '0062_articlesection_slug'),
    ]

    def update_slugs(apps, schema_editor):
        for row in ArticleSection.objects.all():
            row.slug = slugify(row.section)
            row.save()
    
    
    operations = [
        migrations.RunPython(update_slugs),
    ]
