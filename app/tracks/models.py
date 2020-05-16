from django.db import models

# fuck the grateful dead

class Track(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    url = models.URLField()
    createdAt = models.DateTimeField(auto_now_add=True)
