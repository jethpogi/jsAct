const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" } 
];

// Function to display formatted student string
function displayStudent({ name, grade = 0 }) {
  return `Student: ${name}, Grade: ${grade}`;
}

// Create an output string
let outputHTML = "<h2>Uppercase Names</h2><ul>";
outputHTML += students.map(s => `<li>${s.name.toUpperCase()}</li>`).join("");
outputHTML += "</ul>";

// Filter students with grade ≥ 85
const topStudents = students.filter(s => (s.grade ?? 0) >= 85);
outputHTML += "<h2>Students with Grade ≥ 85</h2><ul>";
outputHTML += topStudents.map(s => `<li>${s.name} - ${s.grade}</li>`).join("");
outputHTML += "</ul>";

// Calculate average grade
const grades = students.map(s => s.grade ?? 0);
const total = grades.reduce((sum, g) => sum + g, 0);
const average = (total / grades.length).toFixed(2);
outputHTML += `<h2>Average Grade</h2><p>${average}</p>`;

// Display all students with formatted info
outputHTML += "<h2>Formatted Student Info</h2><ul>";
outputHTML += students.map(s => `<li>${displayStudent(s)}</li>`).join("");
outputHTML += "</ul>";

// Output to the page
document.getElementById("output").innerHTML = outputHTML;
