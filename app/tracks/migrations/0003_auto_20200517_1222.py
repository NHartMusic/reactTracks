# Generated by Django 3.0.6 on 2020-05-17 12:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tracks', '0002_track_postedby'),
    ]

    operations = [
        migrations.RenameField(
            model_name='track',
            old_name='createdAt',
            new_name='created_at',
        ),
        migrations.RenameField(
            model_name='track',
            old_name='postedBy',
            new_name='posted_by',
        ),
    ]
