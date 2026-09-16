# Test Cases and Results

| ID | Test | Expected Result | Result |
|---|---|---|---|
| TC01 | Create valid student | Record created | PASS |
| TC02 | Create with missing name | Validation error | PASS |
| TC03 | Create with invalid email | Validation error | PASS |
| TC04 | Create with duplicate register number | Validation error | PASS |
| TC05 | Create with year 5 | Validation error | PASS |
| TC06 | Create with CGPA 11 | Validation error | PASS |
| TC07 | Read empty database | Empty list | PASS |
| TC08 | Read populated database | Student list | PASS |
| TC09 | Read invalid ID | Error message shown | PASS |
| TC10 | Update valid student | Updated record | PASS |
| TC11 | Update invalid ID | Error message shown | PASS |
| TC12 | Delete valid student | Record deleted | PASS |
| TC13 | Delete invalid ID | Error message shown | PASS |
| TC14 | Search by name | Matching records shown | PASS |
| TC15 | Search by register number | Matching records shown | PASS |
| TC16 | Dashboard statistics | Correct statistics shown | PASS |
| TC17 | S.No display | Continuous numbering shown | PASS |
| TC18 | Stop backend | Frontend shows connection error | PASS |
| TC19 | Restart backend | Data remains available | PASS |
| TC20 | Open on mobile width | Responsive layout | PASS |

## Testing Summary

All major CRUD operations, validation, search, dashboard, error handling, database persistence, and responsive layout were tested successfully.

The REST API was tested using Postman and the frontend was tested using the browser.

## Testing Tools

- Postman
- Web Browser
- Django Development Server
- SQLite Database