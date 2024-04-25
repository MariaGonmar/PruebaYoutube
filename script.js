//Info date
const dateNumber = document.getElementById("dateNumber");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");
const dateText = document.getElementById("dateText");

// Tasks Container
const tasksContainer = document.getElementById("tasksContainer");

const setDate = () => {
  const date = new Date();
  dateNumber.textContent = date.toLocaleString("es", { day: "numeric" });
  dateMonth.textContent = date.toLocaleString("es", { month: "short" });
  dateYear.textContent = date.toLocaleString("es", { year: "numeric" });
  dateText.textContent = date.toLocaleString("es", { weekday: "long" });
};

let tasks = JSON.parse(localStorage.getItem("tasks"));
if (tasks) {
  for (let task of tasks) {
    tasksContainer.innerHTML += `<div class='container'><p>'${task.taskName}' </p></div>`;
  }
}

const addNewTask = (event) => {
  let tasksList = [];
  let taskData = {};
//   event.preventDefault();
  const taskName = event.target[0].value;
  const taskDifficulty = event.target[1].value;
  taskData = { taskName, taskDifficulty };
  console.log(taskName, taskDifficulty);
  if (!taskName || !taskDifficulty) return;
  const task = document.createElement("div");
  task.classList.add("task", "roundBorder");
//   task.addEventListener("click", changeTaskState);
//   task.textContent = `El nombre de la tarea es ${taskName} y el nivel de dificultad es ${taskDifficulty}`;

  if (tasks) {
    let tasksFromLS = JSON.parse(localStorage.getItem("tasks"));
    console.log(tasksFromLS)
    tasksList.push(...tasksFromLS, taskData);
    return localStorage.setItem("tasks", JSON.stringify(tasksList));
    
  }

  

  tasksList.push(taskData);
  console.log(tasksList);
  localStorage.setItem("tasks", JSON.stringify(tasksList));

  console.log(task);
  tasksContainer.prepend(task);
  event.target.reset();
};

function filterByDifficulty(difficulty){
    
// return tasks.filter(task => task.taskDifficulty === difficulty)

let filteredTasks= tasks.filter(task => task.taskDifficulty === difficulty)
tasksContainer.innerHTML = ""
for (let task of filteredTasks) {
    tasksContainer.innerHTML += `<div class='container'><p>'${task.taskName}' </p></div>`;
  }
}
// let difficultyInput = document.querySelector(".dificultad");
// filterByDifficulty(difficultyInput)


// const changeTaskState = (event) => {
//   event.target.classList.toggle("done");
//   event.target.classList.toggle("not-done")
// };

setDate();
// renderTasks()
