from pathlib import Path
import random

from django.shortcuts import render, get_object_or_404
from django.core.exceptions import NON_FIELD_ERRORS, ValidationError

from django.http import HttpRequest
from django.contrib.auth import login

from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User

from rest_framework import (
    generics, 
    permissions,
    viewsets, 
    serializers,
)
from rest_framework.response import Response
from rest_framework.permissions import (
    IsAuthenticated,
    AllowAny,
    IsAdminUser,
)
from rest_framework.views import APIView
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.decorators import api_view, permission_classes

from .models import *
from .serializers import *

class ArticleViewSet(viewsets.ViewSet):
    def list(self, request):
        data = {}
        # /article/?article_id=1
        if request.GET.get('article_id'):
            article_id = request.GET.get('article_id')
            queryset = Article.objects.get(id=article_id)

            serializer = ArticleSerializer(queryset, many=False, context={'request': request})
            return Response(serializer.data)
        # /article/?category=la-la-la
        elif request.GET.get('category'):
            category_slug = request.GET.get('category')
            queryset = Article.objects.filter(section__category__slug=category_slug)
            category = Category.objects.get(slug=category_slug).category
            section = 'all posts'
            
            # /article/?category=la-la&section=la-la
            if request.GET.get('section'):
                section_slug = request.GET.get('section')
                # get all articles in category
                if section_slug == 'all':
                    queryset = Article.objects.filter(section__category__slug=category_slug)
                # get articles withing a section
                else:
                    queryset = Article.objects.filter(section__slug=section_slug)
                    section = ArticleSection.objects.get(slug=section_slug).section
                
            if category_slug == 'home':
                queryset = Article.objects.all()

            data = {'category':category, 'section':section}

        else:
            queryset = Article.objects.all()
        
        serializer = ArticleSerializer(queryset.order_by('-id'), many=True, context={'request': request})
        data['list'] = serializer.data
        return Response(data)

    def partial_update(self, request):
        # {'article_id':1}
        if request.data['article_id']:     
            article_id = request.data['article_id']
            try:
                article = Article.objects.get(id=article_id)
                article.view_count += 1
                article.save()
            except Article.DoesNotExist:
                return Response(status=400)

        return Response(status=201)



class CategoryViewSet(viewsets.ViewSet):
    def list(self, request):
        # /category/?category_id=1
        if request.GET.get('category_id'):                                  
            category_id = request.GET.get('category_id')
            queryset = Category.objects.filter(id=category_id)
        else:
            queryset = Category.objects.all()
    
        serializer = CategorySerializer(queryset, many=True)
        return Response(serializer.data)


class ArticleSectionViewSet(viewsets.ViewSet):
    def list(self, request):
        # /article_section/?section=1
        if request.GET.get('section_id'):                                  
            section_id = request.GET.get('section_id')
            queryset = ArticleSection.objects.filter(id=section_id)
        # /article_section/?category_id=1
        if request.GET.get('category_id'):                                  
            category_id = request.GET.get('category_id')
            queryset = ArticleSection.objects.filter(category=category_id)
        else:
            queryset = ArticleSection.objects.all()
    
        serializer = ArticleSectionSerializer(queryset, many=True)
        return Response(serializer.data)

class PodcastViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Podcast.objects.all()
        serializer = PodcastSerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)


class PromptAnswerViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Prompt.objects.all()
    
        serializer = PromptSerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)
