from django.urls import include, path
from rest_framework import routers
from .views import ProductViewSet, UserAPIView


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('products', ProductViewSet.as_view({
        'get': 'list',
        'post':'create'

    })),
    path('products/<str:pk>',ProductViewSet.as_view({
        'get': 'retrieve',
        'put':'update',
        'delete': 'destroy'

    })),
    path('user', UserAPIView.as_view() )
]