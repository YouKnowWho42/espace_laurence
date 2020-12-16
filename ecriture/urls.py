from django.urls import path

from .views import CreatePost, PostView

urlpatterns = [
    path('', PostView.as_view()),
    path('create-post', CreatePost.as_view())
]
