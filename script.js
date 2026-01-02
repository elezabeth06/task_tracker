const habits = [
  "Wake up before 7:00 AM",
  "Workout",
  "Reading",
  "Learning New",
  "Self Care",
  "Data Flow",
  "Bed before 11:30 PM"
];

const tableBody = document.getElementById("habitRows");

// Load saved data
const savedData = JSON.parse(localStorage.getItem("taskTracer")) || {};

habits.forEach((habit, i) => {
  const row = document.createElement("tr");

  // Index
  row.innerHTML += `<td>${i + 1}</td>`;

  // Habit name
  row.innerHTML += `<td>${habit}</td>`;

  // Days 1–31
  for (let day = 1; day <= 31; day++) {
    const key = `${habit}-${day}`;
    const checked = savedData[key] ? "checked" : "";

    row.innerHTML += `
      <td>
        <input type="checkbox"
               ${checked}
               onchange="saveCheck('${key}', this.checked)">
      </td>
    `;
  }

  tableBody.appendChild(row);
});

function saveCheck(key, value) {
  const data = JSON.parse(localStorage.getItem("taskTracer")) || {};
  data[key] = value;
  localStorage.setItem("taskTracer", JSON.stringify(data));
}
