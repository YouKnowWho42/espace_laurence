from django.db import models

# Create your models here.


class Post(models.Model):
    # writen_by = models.CharField(max_length=50)
    # is_public = models.BooleanField(null=False, default=False)
    content = models.TextField(null=True, blank=True)
    # created_at = models.DateTimeField(auto_now_add=True)
    # last_update_time = models.DateTimeField(auto_now_add=True)
    # view_count = models.PositiveBigIntegerField(default=0)
