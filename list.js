var allTaskList = [];
var trashList = [];

var fav = false;

var form = document.getElementById("task-form");
var err = document.getElementsByClassName("message");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var input = document.getElementById("add-task").value;
    if (input === "") {
        err[0].innerHTML = "* Please enter a task";
        return;
    } else {
        err[0].innerHTML = "";
    }

    var task = {
        name: input,
        category: document.getElementById("category").value,
    };
    allTaskList.push(task);
    displayTasks(allTaskList, "All Tasks");
    document.getElementById("add-task").value = "";
    document.getElementById("category").selectedIndex = 0;
});

function displayAll(name, id) {
    if (id === "all") {
        displayTasks(allTaskList, name);
        return;
    }
    if (id === "del") {
        displayTasks(trashList, name);
        return;
    }
    if (id === "fav") {
        displayTasks(allTaskList.filter((task) => task.fav === true), name);
        return;
    }
    displayTasks(
        allTaskList.filter((task) => task.category === id),
        name
    );
}
function displayTasks(taskArray, name) {
    document.getElementById("display-name").innerHTML = name;
    var tasks = document.getElementById("tasks");
    tasks.innerHTML = "";
    for (var i = 0; i < taskArray.length; i++) {
        tasks.innerHTML += `<div class="task">
          <div class="task-content">
            <input 
              type="text"
              class="task-name"
              value="${taskArray[i].name}"
              readonly
             />
          </div>
          <div class="actions">
            <button type="submit" class="edit" onClick="toggleEditMode(this)">Edit</button>
            <button type="submit" class="delete" onClick="deleteTask(this)">Delete</button>
            <div class="fav">
            <img src="${taskArray[i].fav ? './icons/star-solid.svg' : './icons/star-regular.svg'}" height="20" width="20" onClick="addToFav(${i})" />
            </div>                           
        </div>`;
    }
}

function toggleEditMode(button) {
    var taskContainer = button.parentElement.parentElement;
    var taskNameInput = taskContainer.querySelector(".task-name");
    var editButton = taskContainer.querySelector(".edit");
    
    if (taskNameInput.hasAttribute("readonly")) {
        taskNameInput.removeAttribute("readonly");
        editButton.innerHTML = "Save";

    } else {
        taskNameInput.setAttribute("readonly", true);
        editButton.innerHTML = "Edit";
        var index = Array.from(taskContainer.parentElement.children).indexOf(taskContainer);
        allTaskList[index].name = taskNameInput.value;
    }
}


function deleteTask(e) {
    var taskName = e.parentElement.parentElement.querySelector(".task-name").value;
    var index = allTaskList.findIndex((task) => task.name === taskName);
    var deletedTask = allTaskList.splice(index, 1)[0];
    trashList.push(deletedTask); 
    e.parentElement.parentElement.remove();
}


function addToFav(index) {
    var task = allTaskList[index];
    task.fav = !task.fav; 
    var starIcon = document.querySelectorAll(".fav img")[index];
    starIcon.src = task.fav ? './icons/star-solid.svg' : './icons/star-regular.svg';
    
}

function openNav() {
    document.getElementById("sidebar").style.width = "200px";
    document.getElementById("container").style.marginLeft = "200px";
    document.getElementsByClassName("openBtn").deleteTask;
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("container").style.marginLeft = "0";
}
