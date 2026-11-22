from django.urls import path
from . import views

urlpatterns = [
    path("", views.dashboard, name="dashboard"),

    path("subjects/", views.subjects, name="subjects"),
    path("lesson-plans/", views.lesson_plans, name="lesson_plans"),
    path("students/", views.students, name="students"),
    path("grades/", views.grades, name="grades"),
    path("attendance/", views.attendance, name="attendance"),
    path("settings/", views.settings, name="settings"),
]