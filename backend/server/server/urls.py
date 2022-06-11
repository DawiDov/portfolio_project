from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from api.views import BasicAPIView

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/v1/candidate/', BasicAPIView.as_view({'get': 'list'}))

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
