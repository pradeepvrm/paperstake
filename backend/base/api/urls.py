from django.urls import path
from . import views
from .views import MyTokenObtainPairView, register_user, manage_points, leaderboard

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('', views.getRoutes),

    path('register/', register_user, name='register'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('manage-points/', manage_points, name='manage_points'),
    path('leaderboard/', leaderboard, name='leaderboard'),
]