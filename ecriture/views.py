from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Post
from .serializer import PostSerializer, CreatePostSerializer

# Create your views here.


class PostView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CreatePost(APIView):

    serialiser_class = CreatePostSerializer

    def post(self, request, format=None):
        serializer = self.serialiser_class(data=request.data)

        if serializer.is_valid():
            content = serializer.data.get('content')
            is_public = serializer.data.get('is_public')
            post = Post(writen_by='test env',
                        is_public=is_public, content=content)
