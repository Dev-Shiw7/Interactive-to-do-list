const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(function(task) {
  showTask(task);
});


addTaskBtn.addEventListener("click", function(){
    let taskText=taskInput.value.trim()

   if (taskText !== "") {
    tasks.push(taskText); 
    localStorage.setItem("tasks", JSON.stringify(tasks));    
    showTask(taskText); 
    taskInput.value = ""; 
  }
});



// function showTask(taskText) {
//   let li = document.createElement("li");
//   li.textContent = taskText;
//   let deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";
//   deleteBtn.style.marginLeft = "10px";                                   //For task 1

//   deleteBtn.addEventListener("click", function() {
//     taskList.removeChild(li);
//     tasks = tasks.filter(function(t) {
//       return t !== taskText;
//     });
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   });

//   li.appendChild(deleteBtn); 
//   taskList.appendChild(li);  
// }


function showTask(taskText) {
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = taskText;
  li.appendChild(span);

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.style.marginLeft = "10px";

  editBtn.addEventListener("click", function () {
    let newTask = prompt("Update your task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask;
      let index = tasks.indexOf(taskText);
      if (index !== -1) {
        tasks[index] = newTask;
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    }
  });

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";

  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
    tasks = tasks.filter(function (t) {
      return t !== taskText;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}
