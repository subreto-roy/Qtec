from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from django.views.static import serve
#from django.conf.urls import url


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('product.urls')),
    path('media/<path:path>', serve, {'document_root': settings.MEDIA_ROOT}), 
    path('static/<path:path>', serve, {'document_root': settings.STATIC_ROOT}), 
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
