import autoslug.fields
from django.db import migrations
from django.template.defaultfilters import slugify
from apps.main.models import Category

class Migration(migrations.Migration):

    dependencies = [
        ('main', '0056_category_slug'),
    ]

    def update_slugs(apps, schema_editor):
        for row in Category.objects.all():
            row.slug = slugify(row.category)
            row.save()
    
    
    operations = [
        migrations.RunPython(update_slugs),
    ]
