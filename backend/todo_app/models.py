from django.db import models

# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=120)
    completed = models.BooleanField(default=False)
    due_date = models.DateField()

    def _str_(self):
        return self.title