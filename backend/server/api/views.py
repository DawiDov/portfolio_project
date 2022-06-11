from rest_framework.response import Response
from rest_framework import viewsets
from .models import CandidateInfo
from .serializer import CandidateInfoSerializer

# Create your views here.


class BasicAPIView(viewsets.ModelViewSet):
    queryset = CandidateInfo.objects.all()
    serializer_class = CandidateInfoSerializer
