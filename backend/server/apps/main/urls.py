from django.urls import path
from .views import *

urlpatterns = [
    path("article/", ArticleViewSet.as_view(
        {
            'get': 'list',
            'put': 'partial_update',
        })),
    path("category/", CategoryViewSet.as_view(
        {
            'get': 'list',
        })),
    path("article_section/", ArticleSectionViewSet.as_view(
        {
            'get': 'list',
        })),
    path("prompts/", PromptAnswerViewSet.as_view(
        {
            'get': 'list',
        })),
    path("podcasts/", PodcastViewSet.as_view(
        {
            'get': 'list',
        })),
]