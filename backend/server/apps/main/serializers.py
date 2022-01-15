from rest_framework import serializers
from .models import Article
from django.core.exceptions import ValidationError

############################################################
# Articles
############################################################ 

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
        