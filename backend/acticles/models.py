from django.db import models


class Articles(models.Model):

    title = models.CharField(max_length=255, blank=True, null=True, default=None)
    content = models.TextField()

    def __str__(self):
        return self.title
