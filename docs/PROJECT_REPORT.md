# Student Management System - Project Report

## 1. Project Title

Student Management System

## 2. Project Overview

The Student Management System is a full-stack CRUD-based web application developed to manage student records efficiently.

The application consists of a frontend built using HTML, CSS, and JavaScript, a backend developed using Django and Django REST Framework, and an SQLite database for storing student information.

The system allows users to create, view, update, delete, and search student records through a simple and responsive web interface.

## 3. Problem Statement

Managing student records manually can be time-consuming and may result in duplicate, incomplete, or inconsistent information.

The Student Management System provides a simple web-based solution for maintaining student records in a structured database.

The system supports CRUD operations, input validation, search functionality, error handling, and dashboard statistics.

## 4. Objectives

The main objectives of the project are:

- Develop a complete CRUD-based web application.
- Build a responsive and user-friendly frontend.
- Develop REST API endpoints for student management.
- Store student records in a relational database.
- Implement client-side and server-side validation.
- Provide search functionality by name and register number.
- Display useful student statistics through a dashboard.
- Handle invalid input and API errors properly.
- Test the frontend, backend, API, and database functionality.
- Maintain the project using Git and GitHub.

## 5. Technology Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Python, Django |
| REST API | Django REST Framework |
| Database | SQLite |
| API Testing | Postman |
| Version Control | Git / GitHub |

## 6. Main Entity

The application contains one main entity:

**Student**

### Student Fields

| Field | Description |
|---|---|
| id | Auto-generated Primary Key |
| name | Student name |
| register_number | Unique student register number |
| email | Unique student email |
| department | Student department |
| year | Academic year from 1 to 4 |
| cgpa | Student CGPA from 0 to 10 |

The `register_number` and `email` fields are unique to prevent duplicate student records.

## 7. Database Design

The application uses SQLite as the database.

The Student table contains the following fields:

```text
STUDENT
---------------------------
id                Primary Key
name
register_number   Unique
email             Unique
department
year
cgpa

The database constraints ensure that each student has a unique register number and email address.

8. System Architecture

The application follows a simple three-layer architecture:

User
  |
  v
Frontend
HTML + CSS + JavaScript
  |
  v
REST API
Django REST Framework
  |
  v
Backend
Django
  |
  v
Database
SQLite

The frontend communicates with the Django REST API using HTTP requests.

9. Project Folder Structure
student_management_crud_project/
│
├── backend/
│   ├── manage.py
│   ├── db.sqlite3
│   │
│   ├── student_project/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   │
│   └── students/
│       ├── models.py
│       ├── serializers.py
│       ├── views.py
│       ├── urls.py
│       ├── admin.py
│       └── migrations/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── docs/
│   ├── PROJECT_REPORT.md
│   ├── API_DOCUMENTATION.md
│   ├── TEST_CASES.md
│   └── ER_DIAGRAM.md
│
├── README.md
└── .gitignore
10. Frontend Development

The frontend was developed using HTML, CSS, and JavaScript.

The frontend provides:

Student registration form
Student list
Edit button
Delete button
Search box
Input validation
Dashboard statistics
Responsive design
Success and error messages

The interface allows users to manage student records without directly interacting with the database.

11. Backend Development

The backend was developed using Python and Django.

Django REST Framework is used to create REST API endpoints.

The backend contains:

Student model
Serializer
API views
URL routing
Database operations
Validation
Error handling

The Django ORM is used to communicate with the SQLite database.

12. REST API Endpoints

The application provides the following endpoints:

Method	Endpoint	Purpose
GET	/api/students/	Get all students
POST	/api/students/	Add a new student
GET	/api/students/{id}/	Get one student
PUT	/api/students/{id}/	Update a student
PATCH	/api/students/{id}/	Partially update a student
DELETE	/api/students/{id}/	Delete a student
13. CRUD Operations
Create

A new student can be added using the registration form.

The frontend sends a POST request to the backend API.

Read

The student list is retrieved using a GET request.

The records are displayed in a table.

Update

The Edit button loads the selected student's details into the form.

The updated data is sent using a PUT request.

Delete

The Delete button removes the selected student after confirmation.

The frontend sends a DELETE request to the backend.

14. Validation

Validation is implemented on both frontend and backend.

The system validates:

Required fields
Valid email format
Unique register number
Unique email
Year between 1 and 4
CGPA between 0 and 10
Valid numeric CGPA

Invalid input is rejected and an appropriate error message is displayed.

15. Search Functionality

The application provides a search box for finding students.

Users can search using:

Student name
Register number

The student table is filtered dynamically based on the entered search text.

16. Dashboard Statistics

The dashboard displays useful information about the student records.

The dashboard contains:

Total Students
Department
Current Year
Average CGPA

The statistics are automatically updated when student records are added, updated, or deleted.

17. Error Handling

The application handles common errors properly.

Examples include:

Student not found
Duplicate register number
Duplicate email
Invalid email
Invalid year
Invalid CGPA
Backend connection failure

The API returns appropriate HTTP status codes and error messages.

18. Testing

The application was tested using Postman and the web frontend.

API Testing

The following operations were tested:

GET students
POST student
PUT student
DELETE student
GET student by ID
Invalid student ID
Empty request
Invalid year
Invalid CGPA
Duplicate register number
Duplicate email
Invalid email
Invalid numeric value
Frontend Testing

The following features were tested:

Add student
View student list
Edit student
Delete student
Search student
Form validation
Dashboard statistics

All major CRUD operations were successfully tested.

19. Results

The Student Management System successfully performs the required CRUD operations.

The application can:

Add student records
Display student records
Update student records
Delete student records
Search student records
Validate user input
Display dashboard statistics
Communicate with the Django REST API
Store data in SQLite

The frontend and backend integration was successfully completed.

20. Conclusion

The Student Management System demonstrates the development of a complete full-stack CRUD web application.

The project integrates HTML, CSS, JavaScript, Django, Django REST Framework, SQLite, and Postman.

The application provides a simple interface for managing student records while maintaining validation, database constraints, API functionality, and error handling.

The project also provides practical experience in frontend development, backend development, REST APIs, database management, testing, and full-stack application integration.

21. Future Enhancements

The system can be enhanced in the future by adding:

User authentication and login
Role-based access
Student profile pages
Advanced search and filtering
Sorting options
Pagination
Export to CSV or PDF
More departments and academic years
MySQL or PostgreSQL database
Deployment to a cloud platform
Improved security configuration
Automated testing