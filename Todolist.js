const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && taskInput.value.trim() !== "") {
    addTask(taskInput.value.trim());
    taskInput.value = "";
  }
});

function addTask(taskText) {
  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
  taskList.appendChild(li);
}

function removeTask(button) {
  button.parentElement.remove();
}