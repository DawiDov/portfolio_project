# Generated by Django 3.1.2 on 2022-06-09 13:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Candidate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(default='Дамир', max_length=50, verbose_name='имя')),
                ('last_name', models.CharField(default='Ахмадуллин', max_length=50, verbose_name='фамалия')),
            ],
            options={
                'verbose_name': 'кандидат',
                'verbose_name_plural': 'кандидаты',
            },
        ),
        migrations.CreateModel(
            name='Skills',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('skill_name', models.CharField(default='Python', max_length=256, verbose_name='умения и навыки')),
                ('skill_description', models.TextField(null=True, verbose_name='описание умения')),
                ('canditate', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.candidate')),
            ],
            options={
                'verbose_name': 'умения и навыки',
                'verbose_name_plural': 'умения и навыки',
            },
        ),
    ]