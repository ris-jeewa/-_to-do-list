var tasks =[]
var trash = []

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
    var tasks = document.getElementById("tasks");
    tasks.innerHTML += `<div class="task">
              <div class="task-content">
                <input 
                  type="text"
                  class="task-name"
                  value="${input}"
                  readonly
                 />
              </div>
              <div class="actions">
                <button type="submit" class="edit" onClick="toggleEditMode(this)">Edit</button>
                <button type="submit" class="delete" onClick="deleteTask(this)">Delete</button>
                <div class="fav"><img src="./icons/star-regular.svg" alt="icon" height="20" width="20" onClick="addToFav()"></div>
            </div>`;

    document.getElementById("add-task").value = "";
});

function toggleEditMode() {
    var task = document.getElementsByClassName("task-name");
    var edit = document.getElementsByClassName("edit");
    if (task[0].hasAttribute("readonly")) {
        for (var i = 0; i < task.length; i++) {
            task[i].removeAttribute("readonly");
        }
        edit[0].innerHTML = "Save";
    } else {
        for (var i = 0; i < task.length; i++) {
            task[i].setAttribute("readonly", true);
        }
        edit[0].innerHTML = "Edit";
    }
}

function deleteTask(e) {
    e.parentElement.parentElement.remove();

}

function addToFav() {
    var fav = document.querySelector(".fav img");
    if (fav.getAttribute("src") === "./icons/star-regular.svg") {
        fav.setAttribute("src", "./icons/star-solid.svg");
    } else {
        fav.setAttribute("src", "./icons/star-regular.svg");
    }
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

function handleDisplay() {}
