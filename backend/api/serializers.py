from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from .models import *
from django.utils import timezone

User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
 
    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'is_admin', 'is_planner', 'is_vendor')
 
    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            is_admin=validated_data.get('is_admin', False),
            is_planner=validated_data.get('is_planner', False),
            is_vendor=validated_data.get('is_vendor', False),
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)



class WeddingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wedding
        fields = ['id', 'planner', 'date', 'venue', 'budget', 'description', 'created_at', 'updated_at', 'num_guests']  # Include all fields for simplicity
        read_only_fields = ['created_at', 'updated_at','planner', 'num_guests']  # Protect timestamps from being overwritten

class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = ['id', 'name', 'email', 'phone_number', 'dietary_preferences', 'plus_one', 'wedding','attending']
        read_only_fields = ['wedding'] 
    
    # def validate_email(self, value):
    #     if Guest.objects.filter(email=value).exists():
    #         raise serializers.ValidationError("A guest with this email already exists.")
    #     return value

    def validate(self, attrs):
        if attrs.get('attending') is None:
            raise serializers.ValidationError("Attending status must be specified.")
        return attrs

class ChecklistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Checklist
        fields = ['id', 'wedding', 'title', 'description', 'due_date', 'is_completed', 'created_at', 'updated_at']
        read_only_fields = ['wedding', 'created_at', 'updated_at']

        
class BudgetItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = BudgetItem
        fields = '__all__'
        read_only_fields = ['wedding']

    def validate(self, attrs):
        if attrs['spent_amount'] > attrs['allocated_amount']:
            raise serializers.ValidationError("Spent amount cannot exceed allocated amount.")
        return attrs

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = '__all__'

    def validate_cost(self, value):
        if value < 0:
            raise serializers.ValidationError("Cost cannot be negative.")
        return value

class WeddingVendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeddingVendor
        fields = '__all__'
 
    def validate(self, attrs):
        if attrs['payment_status'] not in ['paid', 'pending', 'cancelled']:
            raise serializers.ValidationError("Payment status must be either 'paid', 'pending', or 'cancelled'.")
        return attrs