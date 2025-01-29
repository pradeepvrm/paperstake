from django.contrib.auth.models import User
from rest_framework import serializers
from base.models import Profile

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'email')

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data['email']
        )
        return user
    
class PointsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['points']

class LeaderboardSerializer(serializers.ModelSerializer):
    points = serializers.IntegerField(source='profile.points')

    class Meta:
        model = User
        fields = ['username', 'points']