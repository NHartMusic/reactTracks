from django.db import models
from django.contrib.auth import get_user_model

# fuck the grateful dead

class Track(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    url = models.URLField()
    createdAt = models.DateTimeField(auto_now_add=True)
    postedBy = models.ForeignKey(get_user_model(), null=True, on_delete=models.CASCADE)
