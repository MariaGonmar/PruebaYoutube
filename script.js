//Info date
const dateNumber = document.getElementById("dateNumber")
const dateMonth = document.getElementById("dateMonth")
const dateYear = document.getElementById("dateYear")
const dateText = document.getElementById("dateText")

// Tasks Container
const tasksContainer = document.getElementById("tasksContainer");

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString("es", {day: "numeric"});
    dateMonth.textContent = date.toLocaleString("es", {month: "short"});
    dateYear.textContent = date.toLocaleString("es", {year: "numeric"});
    dateText.textContent = date.toLocaleString("es", {weekday: "long"});
}

const addNewTask = event => {
    event.preventDefault();
    const taskName = event.target[0].value
    const taskDifficulty = event.target[1].value
    console.log(taskName, taskDifficulty)
    if (!taskName || !taskDifficulty) return;
    const task= document.createElement("div");
    task.classList.add("task", "roundBorder")
    task.addEventListener("click", changeTaskState)
    task.textContent = `El nombre de la tarea es ${taskName} y el nivel de dificultad es ${taskDifficulty}`; 
    console.log(task)
    tasksContainer.prepend(task)
    event.target.reset();
}

const changeTaskState = event => {
    event.target.classList.toggle("done");
}