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
        # /article/?article_id=1
        if request.GET.get('article_id'):                                  
            article_id = request.GET.get('article_id')
            queryset = Article.objects.filter(id=article_id)
        # /article/?category_id=1
        elif request.GET.get('category_id'):                                  
            category_id = request.GET.get('category_id')
            queryset = Article.objects.filter(section__category=category_id)
            # /article/?category_id=1&section_id=4
            if request.GET.get('section_id'):                                  
                section_id = request.GET.get('section_id')
                queryset = Article.objects.filter(section=section_id)
        else:
            queryset = Article.objects.all()
    
        serializer = ArticleSerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)

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
        # /article_section/?section_id=1
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



class PromptAnswerViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Prompt.objects.all()
    
        serializer = PromptSerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)
