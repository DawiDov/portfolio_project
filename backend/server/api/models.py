from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Candidate(models.Model):
    first_name = models.CharField(
        max_length=50,
        verbose_name='имя',
        default='Дамир')
    last_name = models.CharField(
        max_length=50,
        verbose_name='фамалия',
        default='Ахмадуллин')

    def __str__(self):
        return self.first_name

    class Meta:
        verbose_name = 'кандидат'
        verbose_name_plural = 'кандидаты'


class Skills(models.Model):
    canditate = models.ManyToManyField(
        Candidate,
        null=True,
    )
    skill_name = models.CharField(
        max_length=256,
        verbose_name='умения и навыки',
        default='Python'
    )
    skill_description = models.TextField(
        verbose_name='описание умения',
        null=True
    )

    def __str__(self):
        return self.skill_name

    class Meta:
        verbose_name = 'умения и навыки'
        verbose_name_plural = 'умения и навыки'


class Contacts(models.Model):
    candidate = models.OneToOneField(
        Candidate,
        on_delete=models.CASCADE
    )
    git_hub = models.CharField(
        max_length=256,
        verbose_name='github'
    )
    git_flic = models.CharField(
        max_length=256,
        verbose_name='gitflic'
    )
    linkedin = models.CharField(
        max_length=256,
        verbose_name='linkedIn'
    )
    email = models.EmailField(
        max_length=100,
        verbose_name='почта'
    )
    phone_number = models.CharField(
        max_length=17,
        default='1234',
        verbose_name='номер телефона'
    )

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = 'контакты'
        verbose_name_plural = 'контакты'


class Education(models.Model):
    candidate = models.ForeignKey(Candidate, on_delete=models.CASCADE)
    edu_type = models.CharField(max_length=256, default='университет')
    edu_description = models.TextField(verbose_name='описание образования')

    def __str__(self):
        return self.edu_type

    class Meta:
        verbose_name = 'образование'
        verbose_name_plural = 'образование'


class Experience(models.Model):
    candidate = models.ForeignKey(Candidate, on_delete=models.CASCADE)
    exp_type = models.CharField(max_length=200, default='LMARKT')
    exp_description = models.TextField(verbose_name='описание опыта работы')

    def __str__(self):
        return self.exp_type

    class Meta:
        verbose_name = 'опыт работы'
        verbose_name_plural = 'опыт работы'
