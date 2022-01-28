import autoslug.fields
from django.db import migrations
from django.template.defaultfilters import slugify
from apps.main.models import Article

class Migration(migrations.Migration):

    dependencies = [
        ('main', '0067_article_slug'),
    ]

    def update_slugs(apps, schema_editor):
        for row in Article.objects.all():
            row.slug = slugify(row.title)
            row.save()
    
    
    operations = [
        migrations.RunPython(update_slugs),
    ]
