from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = DefaultRouter()
router.register(r'weddings', WeddingViewSet, basename='wedding')
router.register(r'weddings/(?P<wedding_id>\d+)/guests', GuestViewSet, basename='guest'),
router.register(r'weddings/(?P<wedding_id>\d+)/checklist', ChecklistViewSet, basename='checklist')
router.register(r'weddings/(?P<wedding_id>\d+)/budget', BudgetItemViewSet, basename='budgetitem')
# router.register(r'vendor',VendorViewSet)
# router.register(r'weddingvendor',WeddingVendorViewSet)
router.register(r'weddingvendor',WeddingVendorViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('guest/<int:pk>/delete/',GuestDeleteView.as_view(),name='guest-delete'),
    path('guest/<int:pk>/update/',GuestUpdateView.as_view(), name = "guest-update" ),
    path('checklist/<int:pk>/update/',ChecklistUpdateView.as_view(), name= "checklist-update"),
    path('checklist/<int:pk>/delete/',ChecklistDeleteView.as_view(), name = "checklist-update"),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Use TokenObtainPairView for login
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/',RegisterView.as_view(), name= 'register'),
    path('user/',get_user_data,name='user-data'),
    path('weddings/<int:wedding_id>/vendors/', VendorListView.as_view(), name='vendor-list'),
    path('vendors/', VendorListView.as_view(), name='vendor-list'),
    path('vendors/<int:pk>/', VendorDetailView.as_view(), name='vendor-detail'),
]