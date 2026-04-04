const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");
const validationMessage = document.getElementById("validationMessage");

function setValidationMessage(message) {
  validationMessage.textContent = message;
}

function updateClearButtonState() {
  clearBtn.disabled = taskList.children.length === 0;
}

function createTaskItem(taskText) {
  const listItem = document.createElement("li");
  listItem.className = "task-item";

  const taskContent = document.createElement("div");
  taskContent.className = "task-content";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";
  checkbox.setAttribute("aria-label", `Mark ${taskText} as complete`);

  const text = document.createElement("span");
  text.className = "task-text";
  text.textContent = taskText;

  checkbox.addEventListener("change", () => {
    listItem.classList.toggle("completed", checkbox.checked);
  });

  taskContent.append(checkbox, text);

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("aria-label", `Delete ${taskText}`);

  deleteBtn.addEventListener("click", () => {
    listItem.remove();
    updateClearButtonState();
    setValidationMessage("");
  });

  listItem.append(taskContent, deleteBtn);
  return listItem;
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (!taskText) {
    setValidationMessage("Please enter a task before adding it.");
    taskInput.focus();
    return;
  }

  taskList.appendChild(createTaskItem(taskText));
  taskInput.value = "";
  setValidationMessage("");
  updateClearButtonState();
  taskInput.focus();
});

clearBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
  setValidationMessage("");
  updateClearButtonState();
});

updateClearButtonState();
