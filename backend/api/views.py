from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from django.contrib.auth import get_user_model
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework import generics,status
from rest_framework.exceptions import NotFound
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view,permission_classes
from rest_framework.decorators import action
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.response import Response
import csv
from io import TextIOWrapper


User = get_user_model()

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
 
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": serializer.data,
            "message": "User created successfully",
        }, status=status.HTTP_201_CREATED)

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Wedding
from .serializers import WeddingSerializer

class WeddingViewSet(viewsets.ModelViewSet):
    serializer_class = WeddingSerializer
    permission_classes = [IsAuthenticated]  # Ensure only authenticated users can access

    def get_queryset(self):
        # Filter weddings by the logged-in user
        return Wedding.objects.filter(planner=self.request.user)

    def perform_create(self, serializer):
        # Save the wedding with the current user as the planner
        serializer.save(planner=self.request.user)


class GuestViewSet(viewsets.ModelViewSet):
    serializer_class = GuestSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser, JSONParser]  # To handle file uploads

    def get_queryset(self):
        # Get the wedding ID from the URL
        wedding_id = self.kwargs.get('wedding_id')
        try:
            wedding = Wedding.objects.get(id=wedding_id, planner=self.request.user)
        except Wedding.DoesNotExist:
            raise NotFound("Wedding not found or you do not have permission to access it.")
        
        # Return guests only for the specified wedding
        return Guest.objects.filter(wedding=wedding)

    def perform_create(self, serializer):
        # Ensure the wedding is associated with the logged-in user
        wedding_id = self.kwargs.get('wedding_id')
        try:
            wedding = Wedding.objects.get(id=wedding_id, planner=self.request.user)
        except Wedding.DoesNotExist:
            raise NotFound("Wedding not found or you do not have permission to access it.")
        
        # Automatically assign the wedding to the guest
        serializer.save(wedding=wedding)
    
    def perform_update(self, serializer):
        # Verify the wedding is associated with the logged-in user
        wedding_id = self.kwargs.get('wedding_id')
        try:
            wedding = Wedding.objects.get(id=wedding_id, planner=self.request.user)
        except Wedding.DoesNotExist:
            raise NotFound("Wedding not found or you do not have permission to update this guest.")
        
        # Save the updated guest information with the associated wedding
        serializer.save(wedding=wedding)

    @action(detail=False, methods=['post'], url_path='upload_csv')
    def upload_csv(self, request, wedding_id=None):
        file = request.FILES.get('file')
        if not file:
            return Response({"error": "No file uploaded"}, status=status.HTTP_400_BAD_REQUEST)

        # Verify the wedding belongs to the logged-in user
        try:
            wedding = Wedding.objects.get(id=wedding_id, planner=request.user)
        except Wedding.DoesNotExist:
            raise NotFound("Wedding not found or you do not have permission to upload guests for this wedding.")
        
        # Parse the CSV file
        file_data = TextIOWrapper(file.file, encoding='utf-8')
        csv_reader = csv.DictReader(file_data)

        guests = []
        for row in csv_reader:
            guest = Guest(
                wedding=wedding,
                name=row.get("name"),
                email=row.get("email"),
                phone_number=row.get("phone_number"),
                dietary_preferences=row.get("dietary_preferences"),
                plus_one=row.get("plus_one") == "TRUE",
                attending=row.get("attending") == "TRUE",
            )
            guests.append(guest)

        # Bulk create guests
        Guest.objects.bulk_create(guests)
        return Response({"status": "Guests uploaded successfully"}, status=status.HTTP_201_CREATED)


class ChecklistViewSet(viewsets.ModelViewSet):
    serializer_class = ChecklistSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        wedding_id = self.kwargs.get('wedding_id')
        try:
            wedding = Wedding.objects.get(id=wedding_id, planner=self.request.user)
        except Wedding.DoesNotExist:
            raise NotFound("Wedding not found or you do not have permission to access it.")
        return Checklist.objects.filter(wedding=wedding)

    def perform_create(self, serializer):
        wedding_id = self.kwargs.get('wedding_id')
        try:
            wedding = Wedding.objects.get(id=wedding_id, planner=self.request.user)
        except Wedding.DoesNotExist:
            raise NotFound("Wedding not found or you do not have permission to access it.")
        serializer.save(wedding=wedding)

class BudgetItemViewSet(viewsets.ModelViewSet):
    serializer_class = BudgetItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Get the wedding ID from the URL
        wedding_id = self.kwargs.get('wedding_id')
        try:
            # Ensure the wedding belongs to the logged-in user
            wedding = Wedding.objects.get(id=wedding_id, planner=self.request.user)
        except Wedding.DoesNotExist:
            raise NotFound("Wedding not found or you do not have permission to access it.")
        
        # Filter budget items for the specified wedding
        return BudgetItem.objects.filter(wedding=wedding)

    def perform_create(self, serializer):
        # Automatically associate the new budget item with the wedding
        wedding_id = self.kwargs.get('wedding_id')
        try:
            wedding = Wedding.objects.get(id=wedding_id, planner=self.request.user)
        except Wedding.DoesNotExist:
            raise NotFound("Wedding not found or you do not have permission to access it.")
        
        serializer.save(wedding=wedding)

class VendorListView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = VendorSerializer
 
    def get_queryset(self):
        # Get the service_type from query params
        service_type = self.request.query_params.get("service_type")
       
        # Filter vendors by service_type if provided
        queryset = Vendor.objects.all()
        if service_type:
            queryset = queryset.filter(service_type=service_type)
       
        return queryset
 
class VendorDetailView(generics.RetrieveAPIView):
    queryset = Vendor.objects.all()
    serializer_class = VendorSerializer
    permission_classes = [IsAuthenticated]
 
    # Enable pagination for large querysets
      # Define a pagination class if necessary, e.g., PageNumberPagination or LimitOffsetPagination
 
# class WeddingVendorViewSet(viewsets.ModelViewSet):
#     queryset = WeddingVendor.objects.all()
#     serializer_class = WeddingVendorSerializer
#     permission_classes = [IsAuthenticated]
 
#     def perform_create(self, serializer):
#         wedding_id = self.request.data.get('wedding')
#         wedding = Wedding.objects.get(id=wedding_id)
#         serializer.save(wedding=wedding)
 
class WeddingVendorViewSet(viewsets.ModelViewSet):
    queryset = WeddingVendor.objects.all()
    serializer_class = WeddingVendorSerializer
    permission_classes = [IsAuthenticated]
 
    def perform_create(self, serializer):
        wedding_id = self.request.data.get('wedding')
        date = self.request.data.get('date')
        wedding = Wedding.objects.get(id=wedding_id)
       
        # Ensure date is provided in the request data
        if not date:
            return Response({"error": "Date is required for booking."}, status=status.HTTP_400_BAD_REQUEST)
       
        serializer.save(wedding=wedding, date=date)

class GuestDeleteView(generics.DestroyAPIView):
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer
    permission_class = [IsAuthenticated]


    #write the code for deleting the guest associated with the authenticated user
    def get_object(self):
        return super().get_object()

class GuestUpdateView(generics.UpdateAPIView):
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer
    permission_class = [IsAuthenticated]

    #write the code for deleting the guest associated with the authenticated user
    def get_object(self):
        return super().get_object()


class ChecklistDeleteView(generics.DestroyAPIView):
    serializer_class = ChecklistSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        weddings = Wedding.objects.filter(planner=self.request.user)
        return Checklist.objects.filter(wedding__in = weddings)

    def get_object(self):
        queryset = self.get_queryset()
        checklist_id = self.kwargs.get("pk")
        try:
            obj = queryset.get(pk=checklist_id)
            return obj
        except Checklist.DoesNotExist:
            raise NotFound("Checklist not found or does not belong to your weddings.")


class ChecklistUpdateView(generics.UpdateAPIView):
    serializer_class = ChecklistSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Get the weddings associated with the authenticated user
        weddings = Wedding.objects.filter(planner=self.request.user)
        # Return the checklists that are related to those weddings
        return Checklist.objects.filter(wedding__in=weddings)

    def get_object(self):
        queryset = self.get_queryset()
        checklist_id = self.kwargs.get("pk")  # Extract the checklist ID from the URL
        try:
            # Get the checklist object or raise 404 if not found
            obj = queryset.get(pk=checklist_id)
            return obj
        except Checklist.DoesNotExist:
            raise NotFound("Checklist not found or does not belong to your weddings.")



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_data(request):
    user = request.user
    data = {
        "is_admin": user.is_admin,
        "is_planner": user.is_planner,
        "is_vendor": user.is_vendor
    }
    return Response(data)


