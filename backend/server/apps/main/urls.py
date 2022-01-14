from django.urls import path
from .views import *

urlpatterns = [
    path("article/", ArticleViewSet.as_view(
        {
            'get': 'list',
            # 'post': 'create',
            # 'put': 'partial_update',
            # 'delete': 'destroy'
        })),
]