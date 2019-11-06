from rest_framework.routers import DefaultRouter

from acticles.api import views as api_views

router = DefaultRouter()
router.register(r'', api_views.ArticleViewSet, basename='articles')
urlpatterns = router.urls

# urlpatterns = [
#
#     path('', api_views.ArticleListApi.as_view()),
#     path('<pk>', api_views.ArticleDetailApi.as_view()),
#     path('create/', api_views.ArticleCreateApi.as_view()),
#     path('update/<pk>/', api_views.ArticleUpdateApi.as_view()),
#     path('delete/<pk>/', api_views.ArticleDeleteApi.as_view()),
#
# ]
