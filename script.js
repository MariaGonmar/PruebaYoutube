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
    const {value} = event.target.taskTest
    if (!value) return;
    const task= document.createElement("div");
    task.classList.add("task", "roundBorder")
    task.addEventListener("click", changeTaskState)
    task.textContent = value; 
    tasksContainer.prepend(task)
    event.target.reset()
}

const changeTaskState = event => {
    event.target.classList.toggle()
}

setDate()