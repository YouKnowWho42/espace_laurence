from django.urls import path

from .views import CreatePost, PostView, GetPost

urlpatterns = [
    path('post', PostView.as_view()),
    path('create-post', CreatePost.as_view()),
    path('get-post', GetPost.as_view())
]
