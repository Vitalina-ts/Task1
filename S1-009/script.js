const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", e => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.className = "task";

  li.innerHTML = `
    <span>${text}</span>
    <span class="remove">✓</span>
  `;

  // Обробка видалення
  li.querySelector(".remove").addEventListener("click", () => {
    li.classList.add("removing");
    setTimeout(() => li.remove(), 400); // Чекаємо завершення transition
  });

  taskList.appendChild(li);
  input.value = "";
}
