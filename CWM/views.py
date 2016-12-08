from django.shortcuts import render

def home(request):
	return render(request, "CWM.html")

def tutorial(request):
	return render(request, "CWMtutorial.html")

def training(request):
	return render(request, "CWMTraining.html")