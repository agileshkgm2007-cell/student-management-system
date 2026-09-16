from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Student
from .serializers import StudentSerializer


class StudentListCreateView(APIView):

    def get(self, request):
        students = Student.objects.all().order_by("id")
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = StudentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


class StudentDetailView(APIView):

    def get_object(self, pk):
        try:
            return Student.objects.get(pk=pk)
        except Student.DoesNotExist:
            return None

    def get(self, request, pk):
        student = self.get_object(pk)

        if student is None:
            return Response(
                {"error": "Student not found."},
                status=404
            )

        return Response(StudentSerializer(student).data)

    def put(self, request, pk):
        student = self.get_object(pk)

        if student is None:
            return Response(
                {"error": "Student not found."},
                status=404
            )

        serializer = StudentSerializer(
            student,
            data=request.data
        )

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(
            serializer.errors,
            status=400
        )

    def patch(self, request, pk):
        student = self.get_object(pk)

        if student is None:
            return Response(
                {"error": "Student not found."},
                status=404
            )

        serializer = StudentSerializer(
            student,
            data=request.data,
            partial=True
        )

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(
            serializer.errors,
            status=400
        )

    def delete(self, request, pk):
        student = self.get_object(pk)

        if student is None:
            return Response(
                {"error": "Student not found."},
                status=404
            )

        student.delete()

        return Response(
            {"message": "Student deleted successfully."},
            status=200
        )