from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    email = models.EmailField(max_length=255, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    points = models.IntegerField(default=1000)
 
    def __str__(self):
        return f"{self.user.username} - Points: {self.points}"