from django.contrib import admin
from .models import Candidate, Skills, Contacts, Education, Experience

# Register your models here.


class AdminSkills(admin.ModelAdmin):
    list_display = ('skill_name', 'skill_description')


class AdminContacts(admin.ModelAdmin):
    list_display = ('email', 'phone_number',
                    'git_hub', 'git_flic', 'linkedin')


class AdminEducation(admin.ModelAdmin):
    list_display = ('edu_type', 'edu_description')


class AdminExperience(admin.ModelAdmin):
    list_display = ('exp_type', 'exp_description')


admin.site.register(Experience, AdminExperience)
admin.site.register(Education, AdminEducation)
admin.site.register(Candidate)
admin.site.register(Contacts, AdminContacts)
admin.site.register(Skills, AdminSkills)
# admin.site.register(Contacts)
# admin.site.register(Education)
# admin.site.register(Experience)
