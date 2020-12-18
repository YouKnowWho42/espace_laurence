from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.utils.text import slugify


from .models import Post
from .serializer import PostSerializer, CreatePostSerializer

# Create your views here.


class PostView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class GetPost(APIView):
    serializer_class = PostSerializer
    lookup_url_kwargs = 'slug'

    def get(self, request, format=None):
        slug = request.GET.get(self.lookup_url_kwargs)
        if slug is not None:
            post = Post.objects.filter(slug=slug)
            if len(post) > 0:
                data = PostSerializer(post[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Post Not Found': 'Invalid Post Slug.'},
                            status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Slug parameter not found in request.'},
                        status=status.HTTP_400_BAD_REQUEST)


class CreatePost(APIView):
    serializer_class = CreatePostSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)

        if request.user.is_authenticated:
            if serializer.is_valid():
                title = serializer.data.get('title')
                slug = self.generate_unique_slug(title)
                author = request.user
                content = serializer.data.get('content')
                post = Post(title=title, slug=slug,
                            author=author, content=content)
                post.save()
                return Response(PostSerializer(post).data,
                                status=status.HTTP_201_CREATED)
            else:
                return Response({'Bad Request': 'Invalid post data'},
                                status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"Not Autorised": "Only connected users can create Post."},
                            status=status.HTTP_401_UNAUTHORIZED)

    def generate_unique_slug(self, title):
        i = 0
        while True:
            if i == 0:
                slug = slugify(title)
            if i > 0:
                slug = slugify(title) + f"-{i}"

            if Post.objects.filter(slug=slug).count() == 0:
                break
            i += 1
        return slug
