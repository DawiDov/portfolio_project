# Generated by Django 3.1.2 on 2022-06-11 10:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_auto_20220611_1026'),
    ]

    operations = [
        migrations.RenameField(
            model_name='candidateinfo',
            old_name='contact',
            new_name='contacts',
        ),
    ]