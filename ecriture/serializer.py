from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'writen_by', 'is_public', 'content',
                  'created_at', 'last_update_time', 'view_count')


class CreatePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('is_public', 'content')
