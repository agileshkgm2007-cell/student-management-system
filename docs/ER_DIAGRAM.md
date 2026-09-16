# Student Management System - ER Diagram

## Student Entity

```text
+--------------------------------+
|            STUDENT             |
+--------------------------------+
| id (Primary Key)               |
| name                           |
| register_number (Unique)      |
| email (Unique)                 |
| department                     |
| year                           |
| cgpa                           |
+--------------------------------+
Entity Description

The Student entity stores the details of students in the system.

Attributes
id - Primary Key
name - Student name
register_number - Unique register number
email - Unique email address
department - Student department
year - Academic year
cgpa - Student CGPA

The application currently contains one main entity, Student. Therefore, there are no relationships with other tables in this basic version.