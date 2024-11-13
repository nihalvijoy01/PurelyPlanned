# weddings/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_wedding, name='create_wedding'),
    path('<uuid:wedding_id>/', views.get_wedding, name='get_wedding'),
]
