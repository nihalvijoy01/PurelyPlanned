from django.shortcuts import render

# Create your views here.
# weddings/views.py
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Wedding
from .serializers import WeddingSerializer

@api_view(['POST'])
def create_wedding(request):
    serializer = WeddingSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_wedding(request, wedding_id):
    try:
        wedding = Wedding.objects.get(wedding_id=wedding_id)
        serializer = WeddingSerializer(wedding)
        return Response(serializer.data)
    except Wedding.DoesNotExist:
        return Response({"error": "Wedding not found"}, status=status.HTTP_404_NOT_FOUND)
