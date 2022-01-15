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

from .models import Article
from .serializers import *

class ArticleViewSet(viewsets.ViewSet):
    def list(self, request):
        # /article/?article_id=1
        if request.GET.get('article_id'):                                  
            article_id = request.GET.get('article_id')
            queryset = Article.objects.filter(id=article_id)
        else:
            queryset = Article.objects.all()
        serializer = ArticleSerializer(queryset, many=True)
        return Response(serializer.data)