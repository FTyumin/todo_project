from django.db import models

# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=120)
    due_date = models.DateField()
    completed = models.BooleanField(default=False)
    def _str_(self):
        return self.title, self.due_date, self.completed