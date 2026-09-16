from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    register_number = models.CharField(max_length=30, unique=True)
    email = models.EmailField(unique=True)
    department = models.CharField(max_length=100)
    year = models.IntegerField()
    cgpa = models.FloatField()

    def __str__(self):
        return self.name
