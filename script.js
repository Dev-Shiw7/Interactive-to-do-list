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



function showTask(taskText) {
  let li = document.createElement("li");
  li.textContent = taskText;
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";

  deleteBtn.addEventListener("click", function() {
    taskList.removeChild(li);
    tasks = tasks.filter(function(t) {
      return t !== taskText;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  li.appendChild(deleteBtn); 
  taskList.appendChild(li);  
}
