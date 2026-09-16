# Student Management System

A complete CRUD-based full-stack web application developed according to the provided SOP.

## Technology Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Django + Django REST Framework
- Database: SQLite
- API Testing: Postman
- Version Control: Git / GitHub

## Features
- Add student
- View all students
- Edit student
- Delete student
- Search students
- Client-side validation
- Server-side validation
- REST API
- Error and success messages
- Responsive UI

## Student Fields
- Name
- Register Number
- Email
- Department
- Year
- CGPA

## API Endpoints
- POST `/api/students/`
- GET `/api/students/`
- GET `/api/students/{id}/`
- PUT/PATCH `/api/students/{id}/`
- DELETE `/api/students/{id}/`

## Setup

### Backend
```bash
cd backend
python -m venv venv
# Windows
venv\Scripts\activate
# Linux/Mac
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend
Open `frontend/index.html` in a browser after starting the backend.

The frontend expects the API at:
`http://127.0.0.1:8000/api/students/`

## Project Structure
```text
student_management_crud/
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   ├── student_project/
│   └── students/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── docs/
│   ├── PROJECT_REPORT.md
│   ├── API_DOCUMENTATION.md
│   ├── TEST_CASES.md
│   └── ER_DIAGRAM.md
└── README.md
```
