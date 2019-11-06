from rest_framework import viewsets

from acticles.models import Articles
from .serializers import ArticlesSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = ArticlesSerializer
    queryset = Articles.objects.all()


# class ArticleListApi(ListAPIView):
#     queryset = Articles.objects.all()
#     serializer_class = ArticlesSerializer
#
#
# class ArticleDetailApi(RetrieveAPIView):
#     queryset = Articles.objects.all()
#     serializer_class = ArticlesSerializer
#
#
# class ArticleCreateApi(CreateAPIView):
#     queryset = Articles.objects.all()
#     serializer_class = ArticlesSerializer
#
#
# class ArticleDeleteApi(DestroyAPIView):
#     queryset = Articles.objects.all()
#     serializer_class = ArticlesSerializer
#
#
# class ArticleUpdateApi(UpdateAPIView):
#     queryset = Articles.objects.all()
#     serializer_class = ArticlesSerializer
#

