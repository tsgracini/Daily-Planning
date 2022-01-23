let taskInput = document.getElementById("taskInputField");
let buttonAddTask = document.getElementById("buttonAddTask");
let buttonCleanInputField = document.getElementById("buttonCleanInputField");
let tasksContainer = document.getElementById("tasksContainer");
let h2 = document.getElementById("titleTasksContainer");

onload = function(){
    let PendingTasks = localStorage.getItem("tasksData");

    if (PendingTasks) {
        tasksContainer.innerHTML += PendingTasks;
    }

    updateScreen();
}

function addNewTask(){
    if (tasksContainer.innerHTML == "<p>You don't have new tasks.<br><br></p>") {
        tasksContainer.innerHTML = "";
    }

    if (taskInput.value != "") {
        tasksContainer.innerHTML = `<div class="task-item">
            ${taskInput.value}
            <i onclick="removeTask(this)" class="fas fa-trash-alt trash"></i>
        </div>` + tasksContainer.innerHTML

        location = "#titleTasksContainer";
    }

    localStorage.setItem("tasksData", tasksContainer.innerHTML);
    cleanInput();
    updateScreen();
}

function cleanInput(){
    taskInput.value = "";
}

function removeTask(element){
    element.parentElement.remove();
    localStorage.setItem("tasksData", tasksContainer.innerHTML);

    updateScreen();
}

function updateScreen(){
    console.log(tasksContainer.innerHTML == false);
    if (tasksContainer.innerHTML == false) {
        localStorage.clear();
        console.log("Ola")
        tasksContainer.innerHTML = "<p>You don't have new tasks.<br><br></p>";
    }
}

buttonAddTask.addEventListener("click", addNewTask);
buttonCleanInputField.addEventListener("click", cleanInput);