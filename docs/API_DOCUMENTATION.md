# Student Management System - API Documentation

## 1. API Overview

The Student Management System provides REST API endpoints for managing student records.

The API is developed using:

- Python
- Django
- Django REST Framework
- SQLite

Base URL:

```text
http://127.0.0.1:8000/api/

Student API URL:

http://127.0.0.1:8000/api/students/
2. API Endpoints
Method	Endpoint	Description
GET	/api/students/	Get all students
POST	/api/students/	Create a new student
GET	/api/students/{id}/	Get one student
PUT	/api/students/{id}/	Update a student
PATCH	/api/students/{id}/	Partially update a student
DELETE	/api/students/{id}/	Delete a student
3. GET - All Students
Request
GET /api/students/
Description

Returns all student records stored in the database.

Example Response
[
    {
        "id": 1,
        "name": "Arun",
        "register_number": "AIML001",
        "email": "arun@gmail.com",
        "department": "AIML",
        "year": 2,
        "cgpa": 8.5
    }
]
4. POST - Create Student
Request
POST /api/students/
Request Body
{
    "name": "Arun",
    "register_number": "AIML001",
    "email": "arun@gmail.com",
    "department": "AIML",
    "year": 2,
    "cgpa": 8.5
}
Description

Creates a new student record in the database.

5. GET - Student by ID
Request
GET /api/students/{id}/
Example
GET /api/students/1/
Description

Returns the details of a specific student using the student ID.

Example Response
{
    "id": 1,
    "name": "Arun",
    "register_number": "AIML001",
    "email": "arun@gmail.com",
    "department": "AIML",
    "year": 2,
    "cgpa": 8.5
}
6. PUT - Update Student
Request
PUT /api/students/{id}/
Example
PUT /api/students/1/
Request Body
{
    "name": "Arun",
    "register_number": "AIML001",
    "email": "arun@gmail.com",
    "department": "AIML",
    "year": 2,
    "cgpa": 9.0
}
Description

Updates the details of an existing student.

7. PATCH - Partial Update
Request
PATCH /api/students/{id}/
Example
PATCH /api/students/1/
Request Body
{
    "cgpa": 9.2
}
Description

Updates selected fields of an existing student.

8. DELETE - Delete Student
Request
DELETE /api/students/{id}/
Example
DELETE /api/students/1/
Description

Deletes the selected student record from the database.

Successful Response
{
    "message": "Student deleted successfully."
}
9. Student Fields
Field	Type	Description
id	Integer	Primary Key
name	String	Student name
register_number	String	Unique register number
email	String	Unique email
department	String	Student department
year	Integer	Academic year
cgpa	Decimal	Student CGPA
10. Validation Rules
Name is required.
Register number is required and must be unique.
Email is required and must be valid and unique.
Department is required.
Year must be between 1 and 4.
CGPA must be between 0 and 10.
11. Error Handling
Invalid Year
{
    "year": [
        "Year must be between 1 and 4."
    ]
}
Invalid CGPA
{
    "cgpa": [
        "CGPA must be between 0 and 10."
    ]
}
Invalid Email
{
    "email": [
        "Enter a valid email address."
    ]
}
Student Not Found

Request:

GET /api/students/999/

Response:

{
    "error": "Student not found."
}
12. API Testing

The API was tested using Postman.

The following operations were tested:

GET all students
GET student by ID
POST student
PUT student
DELETE student
Empty field validation
Invalid email validation
Invalid year validation
Invalid CGPA validation
Duplicate register number validation
Duplicate email validation
Invalid student ID handling
13. Frontend Integration

The frontend communicates with the Django REST API using JavaScript fetch() requests.

Frontend
   |
   v
JavaScript fetch()
   |
   v
Django REST API
   |
   v
Django ORM
   |
   v
SQLite Database

The API response is received by JavaScript and displayed in the frontend.

14. Conclusion

The Student Management System API provides complete CRUD functionality for managing student records.

The API supports:

Create
Read
Update
Delete
Validation
Error handling
Database integration