# Generated by Django 4.1.5 on 2023-02-26 13:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todo_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todo',
            name='description',
        ),
    ]
