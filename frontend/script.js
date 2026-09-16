const API_URL = "https://student-management-system-cah7.onrender.com/api/students/";

const form = document.getElementById("student-form");
const table = document.getElementById("student-table");
const search = document.getElementById("search");
const message = document.getElementById("message");
const cancelButton = document.getElementById("cancel-btn");
const totalStudents = document.getElementById("total-students");
const averageCgpa = document.getElementById("average-cgpa");

let students = [];

// Show message
function showMessage(text, type = "error") {
    message.textContent = text;
    message.className = type;

    setTimeout(() => {
        message.textContent = "";
        message.className = "";
    }, 3000);
}

// Load students
async function loadStudents() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error();
        }

        students = await response.json();
        displayStudents(students);
        updateStats();
    } catch (error) {
        showMessage(
            "⚠️ Backend is not running or cannot be reached.",
            "error"
        );
    }
}

// Display students
function displayStudents(list) {
    table.innerHTML = "";

    list.forEach((student, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.register_number}</td>
            <td>${student.email}</td>
            <td>${student.department}</td>
            <td>${student.year}</td>
            <td>${student.cgpa}</td>
            <td>
                <button
                    class="edit-btn"
                    onclick="editStudent(${student.id})"
                >
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteStudent(${student.id})"
                >
                    Delete
                </button>
            </td>
        `;

        table.appendChild(row);
    });
}

// Add / Update student
form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const id = document.getElementById("student-id").value;

    const student = {
        name: document.getElementById("name").value.trim(),

        register_number:
            document.getElementById("register_number").value.trim(),

        email:
            document.getElementById("email").value.trim(),

        department:
            document.getElementById("department").value.trim(),

        year:
            Number(document.getElementById("year").value),

        cgpa:
            Number(document.getElementById("cgpa").value)
    };

    // Required field validation
    if (!student.name) {
        showMessage(
            "⚠️ Please enter student name.",
            "error"
        );
        document.getElementById("name").focus();
        return;
    }

    if (!student.register_number) {
        showMessage(
            "⚠️ Please enter register number.",
            "error"
        );
        document.getElementById("register_number").focus();
        return;
    }

    if (!student.email) {
        showMessage(
            "⚠️ Please enter email.",
            "error"
        );
        document.getElementById("email").focus();
        return;
    }

    if (!student.department) {
        showMessage(
            "⚠️ Please enter department.",
            "error"
        );
        document.getElementById("department").focus();
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(student.email)) {
        showMessage(
            "⚠️ Please enter a valid email address.",
            "error"
        );
        document.getElementById("email").focus();
        return;
    }

    // Year validation
    if (
        !student.year ||
        student.year < 1 ||
        student.year > 4
    ) {
        showMessage(
            "⚠️ Year must be between 1 and 4.",
            "error"
        );
        document.getElementById("year").focus();
        return;
    }

    // CGPA validation
    if (
        isNaN(student.cgpa) ||
        student.cgpa < 0 ||
        student.cgpa > 10
    ) {
        showMessage(
            "⚠️ CGPA must be between 0 and 10.",
            "error"
        );
        document.getElementById("cgpa").focus();
        return;
    }

    try {
        let response;

        // Update student
        if (id) {
            response = await fetch(
                API_URL + id + "/",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(student)
                }
            );
        }

        // Add student
        else {
            response = await fetch(
                API_URL,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(student)
                }
            );
        }

        const data = await response.json();

        // Backend error
        if (!response.ok) {
            if (data.register_number) {
                showMessage(
                    "❌ Register number already exists.",
                    "error"
                );
            }

            else if (data.email) {
                showMessage(
                    "❌ Email already exists or is invalid.",
                    "error"
                );
            }

            else if (data.year) {
                showMessage(
                    "❌ " + data.year[0],
                    "error"
                );
            }

            else if (data.cgpa) {
                showMessage(
                    "❌ " + data.cgpa[0],
                    "error"
                );
            }

            else {
                showMessage(
                    "❌ Please check the entered details.",
                    "error"
                );
            }

            return;
        }

        // Success message
        if (id) {
            showMessage(
                "✅ Student updated successfully!",
                "success"
            );
        }

        else {
            showMessage(
                "✅ Student added successfully!",
                "success"
            );
        }

        resetForm();
        await loadStudents();

    } catch (error) {
        showMessage(
            "❌ Could not connect to backend.",
            "error"
        );
    }
});

// Edit student
function editStudent(id) {
    const student =
        students.find(item => item.id === id);

    if (!student) {
        return;
    }

    document.getElementById("student-id").value =
        student.id;

    document.getElementById("name").value =
        student.name;

    document.getElementById("register_number").value =
        student.register_number;

    document.getElementById("email").value =
        student.email;

    document.getElementById("department").value =
        student.department;

    document.getElementById("year").value =
        student.year;

    document.getElementById("cgpa").value =
        student.cgpa;

    document.getElementById("form-title").textContent =
        "Edit Student";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Delete student
async function deleteStudent(id) {
    if (!confirm("Delete this student?")) {
        return;
    }

    try {
        const response = await fetch(
            API_URL + id + "/",
            {
                method: "DELETE"
            }
        );

        if (!response.ok) {
            showMessage(
                "❌ Student could not be deleted.",
                "error"
            );
            return;
        }

        showMessage(
            "✅ Student deleted successfully!",
            "success"
        );

        await loadStudents();

    } catch (error) {
        showMessage(
            "❌ Could not connect to backend.",
            "error"
        );
    }
}

// Reset form
function resetForm() {
    form.reset();

    document.getElementById("student-id").value =
        "";

    document.getElementById("form-title").textContent =
        "Add Student";
}

// Cancel button
cancelButton.addEventListener(
    "click",
    resetForm
);

// Search
search.addEventListener(
    "input",
    function() {
        const text =
            search.value.toLowerCase();

        const filtered =
            students.filter(student =>
                student.name
                    .toLowerCase()
                    .includes(text)
                ||
                student.register_number
                    .toLowerCase()
                    .includes(text)
            );

        displayStudents(filtered);
    }
);

// Update dashboard statistics
function updateStats() {
    totalStudents.textContent =
        students.length;

    if (students.length === 0) {
        averageCgpa.textContent =
            "0.00";
        return;
    }

    let totalCgpa = 0;

    students.forEach(student => {
        totalCgpa =
            totalCgpa + Number(student.cgpa);
    });

    const average =
        totalCgpa / students.length;

    averageCgpa.textContent =
        average.toFixed(2);
}

// Start application
loadStudents();