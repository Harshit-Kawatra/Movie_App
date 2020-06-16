from django.contrib import admin
from movie_admin.models import movie, tvshow

# Register your models here.

class Admin_Movie(admin.ModelAdmin):
    list_display=['movie_name','movie_poster','movie_genre', 
                    'movies_language','movies_rating','movies_link',
                    'movies_description']

class TV_Admin(admin.ModelAdmin):
    list_display=['tvshow_name','tvshow_poster','tvshow_genre', 
                    'tvshow_language','tvshow_rating','tvshow_link',
                    'tvshow_description']

admin.site.register(movie,Admin_Movie)
admin.site.register(tvshow, TV_Admin)