from django.contrib import admin
from .models import Todo

class ToDoAdmin(admin.ModelAdmin):
    list_display = ('title','description','completed','due_date')

admin.site.register(Todo,ToDoAdmin)

