from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"

    def validate_year(self, value):
        if value < 1 or value > 4:
            raise serializers.ValidationError("Year must be between 1 and 4.")
        return value

    def validate_cgpa(self, value):
        if value < 0 or value > 10:
            raise serializers.ValidationError("CGPA must be between 0 and 10.")
        return value
