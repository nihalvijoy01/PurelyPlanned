from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    is_admin = models.BooleanField(default=False)
    is_planner = models.BooleanField(default=False)
    is_vendor = models.BooleanField(default=False)

class Wedding(models.Model):
    planner = models.ForeignKey(User, related_name='weddings', on_delete=models.CASCADE)
    date = models.DateField()
    venue = models.CharField(max_length=255)
    budget = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def num_guests(self):
        return self.guests.count()


class Guest(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15, blank=True)
    dietary_preferences = models.CharField(max_length=255, blank=True)
    plus_one = models.BooleanField(default=False)
    attending = models.BooleanField(default=None)
    wedding = models.ForeignKey(Wedding, related_name='guests', on_delete=models.CASCADE)


class Checklist(models.Model):
    wedding = models.ForeignKey(Wedding, related_name='checklist', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    due_date = models.DateField()
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class BudgetItem(models.Model):
    name = models.CharField(max_length=100)
    allocated_amount = models.DecimalField(max_digits=10, decimal_places=2)
    spent_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    wedding = models.ForeignKey(Wedding, related_name='budget_items', on_delete=models.CASCADE)
    category = models.CharField(max_length=100)

class Vendor(models.Model):
    SERVICE_TYPE_CHOICES = [
        ('Venue', 'Venue'),
        ('Catering', 'Catering'),
        ('Photography', 'Photography'),
        ('Decoration', 'Decoration'),
        ('Entertainment','Entertainment'),
        ('Travel','Travel'),
        ('MakeUp','MakeUp'),
        # Add other service types as needed
    ]
   
    name = models.CharField(max_length=255)
    service_type = models.CharField(max_length=50, choices=SERVICE_TYPE_CHOICES)
    contact_info = models.CharField(max_length=255)
    cost = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True)
    location = models.CharField(max_length=255)
    image = models.ImageField(upload_to='vendor_images/', null=True, blank=True)
    image1 = models.ImageField(upload_to='vendor_images/', null=True, blank=True)
    image2 = models.ImageField(upload_to='vendor_images/', null=True, blank=True)
    image3 = models.ImageField(upload_to='vendor_images/', null=True, blank=True)
   
    def __str__(self):
        return self.name


class WeddingVendor(models.Model):
    vendor = models.ForeignKey(Vendor, related_name='wedding_vendors', on_delete=models.CASCADE)
    wedding = models.ForeignKey(Wedding, related_name='wedding_vendors', on_delete=models.CASCADE)
    date = models.DateField()  # New date field to record the booking date
    payment_status = models.CharField(max_length=50)
 
    class Meta:
        unique_together = ('vendor', 'date')  # Ensures a vendor can’t be booked for multiple weddings on the same date
 
    def __str__(self):
        return f"{self.vendor} for {self.wedding} on {self.date}"
