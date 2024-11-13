from django.db import models

# Create your models here.
from django.db import models
import uuid

class Wedding(models.Model):
    wedding_id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    bride_name = models.CharField(max_length=100)
    groom_name = models.CharField(max_length=100)
    wedding_date = models.DateField()
    venue = models.CharField(max_length=200)
    additional_details = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.bride_name} & {self.groom_name}'s Wedding"
