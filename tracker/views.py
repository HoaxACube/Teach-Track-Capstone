from django.shortcuts import render


def dashboard(request):
    return render(request, "dashboard.html")


def subjects(request):
    return render(request, "subjects.html")


def lesson_plans(request):
    return render(request, "lesson_plans.html")


def students(request):
    return render(request, "students.html")


def grades(request):
    return render(request, "grades.html")


def attendance(request):
    return render(request, "attendance.html")


def settings(request):
    return render(request, "settings.html")