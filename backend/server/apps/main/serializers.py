from rest_framework import serializers
from .models import *
from django.core.exceptions import ValidationError

############################################################
# Articles
############################################################ 

class ArticleSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleSection
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    sections = ArticleSectionSerializer(many=True)
    
    class Meta:
        model = Category
        fields = '__all__'
        
class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'

class PromptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prompt
        fields = '__all__'

class PromptAnswerSerializer(serializers.ModelSerializer):
    # prompts = PromptSerializer(many=True)
    
    class Meta:
        model = PromptAnswer
        fields = '__all__'
