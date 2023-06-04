from django.urls import path
from . import views

urlpatterns = [
    path('', views. product_category_view, name=' product_category_view'),
]
    
   