from rest_framework import serializers
from .models import *
from django.core.exceptions import ValidationError

############################################################
# Articles
############################################################ 

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        
class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
    
    # def to_representation(self, obj):
    #     representation = super().to_representation(obj)
    #     return representation.pop('image')

class ArticleSectionSerializer(serializers.ModelSerializer):
    # photo_url = serializers.SerializerMethodField('get_photo_url')

    class Meta:
        model = ArticleSection
        fields = '__all__'

    # def get_photo_url(self, obj):
    #     request = self.context['request']
    #     photo_url = obj.picture.url
    #     return request.build_absolute_uri(photo_url)
