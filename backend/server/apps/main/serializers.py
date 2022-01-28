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
    # foo = serializers.SerializerMethodField()

    # def get_foo(self, obj):
    #     return "Foo id: %i" % obj.pk
    section_name = serializers.ReadOnlyField(source='section.section')
    class Meta:
        model = Article
        fields = '__all__'

class PromptAnswerSerializer(serializers.ModelSerializer):
    # prompts = PromptSerializer(many=True)
    # video_file_path = serializers.SerializerMethodField('get_path')

    # def get_path(self, obj):
    #     return self.context['request'].build_absolute_uri(obj.video_file)
    
    class Meta:
        model = PromptAnswer
        fields = '__all__'

class PromptSerializer(serializers.ModelSerializer):
    answers = PromptAnswerSerializer(many=True, read_only=True)
    class Meta:
        model = Prompt
        fields = '__all__'

class PodcastSerializer(serializers.ModelSerializer):
    class Meta:
        model = Podcast
        fields = '__all__'

