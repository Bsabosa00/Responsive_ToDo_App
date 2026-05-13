const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");

const taskList = document.getElementById("taskList");
const completedList = document.getElementById("completedList");

const tasksCount = document.getElementById("todayCount");
const completedCount = document.getElementById("CompletedCount");

const todayBadge = document.getElementById("todayBadge");
const completedBadge = document.getElementById("completedBadge");


// Add task button
addBtn.addEventListener("click", addTask);

// Enter key
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    // Create task item
    const li = document.createElement("li");

    // Left side
    const taskLeft = document.createElement("div");
    taskLeft.className = "task-left";

    // Radio button
    const checkCircle = document.createElement("div");
    checkCircle.className = "check-circle";

    checkCircle.innerHTML =
        '<i class="fa-solid fa-check"></i>';

    // Task text
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";

    deleteBtn.innerHTML =
        '<i class="fa-solid fa-trash"></i>';

    // Complete / uncomplete task
    checkCircle.addEventListener("click", () => {

        li.classList.toggle("completed");

        // Move task
        if (li.classList.contains("completed")) {

            completedList.prepend(li);

        } else {

            taskList.prepend(li);

        }

        updateCounts();

    });

    // Delete task
    deleteBtn.addEventListener("click", () => {

        li.style.opacity = "0";
        li.style.transform = "translateX(100px)";

        setTimeout(() => {

            li.remove();
            updateCounts();

        }, 300);

    });

    // Append elements
    taskLeft.appendChild(checkCircle);
    taskLeft.appendChild(span);

    li.appendChild(taskLeft);
    li.appendChild(deleteBtn);

    // Add to Today tasks
    taskList.prepend(li);

    // Clear input
    taskInput.value = "";

    // Update numbers
    updateCounts();
}

// Update counters
function updateCounts() {

    const tasks = taskList.children.length;
    const completed = completedList.children.length;

    tasksCount.textContent = tasks;
    completedCount.textContent = completed;

    todayBadge.textContent = tasks;
    completedBadge.textContent = completed;
}
updateCounts()
