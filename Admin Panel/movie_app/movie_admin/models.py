from django.db import models

# Create your models here.
Genre = (('RN','Romance'),
         ('CN','Comedy'),
         ('TH','Thriller'), 
         ('HR','Horror'),
         ('FC','Fiction'),
         ('AT','Action'),
         ('AN','Animation'),
)
Language = (('HD','Hindi'),
            ('TN','Tamil'),
            ('TL','Telugu'),
            ('EN','English'),
            ('SN','Spanish'),
            ('FR','French')
)

class movie(models.Model):

    movie_name = models.CharField(max_length=128, blank=False)
    movie_poster = models.ImageField(upload_to='movieimages/')
    movie_genre = models.CharField(max_length=30, choices=Genre)
    movies_language = models.CharField(max_length=30, choices=Language)
    movies_rating = models.CharField(max_length=10, blank=True)
    movies_link = models.URLField(max_length=300)
    movies_description = models.CharField(max_length=1024, blank=True)
    def __str__(self):
        return self.movie

class tvshow(models.Model):

    tvshow_name = models.CharField(max_length=128, blank=False)
    tvshow_poster = models.ImageField(upload_to='tvshowimages/')
    tvshow_genre = models.CharField(max_length=30, choices=Genre)
    tvshow_language = models.CharField(max_length=30, choices=Language)
    tvshow_rating = models.CharField(max_length=10, blank=True)
    tvshow_link = models.URLField(max_length=300)
    tvshow_description = models.CharField(max_length=1024, blank=True)
    def __str__(self):
        return self.tvshow


