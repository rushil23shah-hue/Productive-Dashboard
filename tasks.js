// GET ELEMENTS

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


// LOAD TASKS

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// RENDER TASKS (UPDATED WITH CHECKBOX)

function renderTasks(){

taskList.innerHTML = "";

tasks.forEach((task,index)=>{

const li = document.createElement("li");


// CHECKBOX

const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.checked = task.completed;

checkbox.addEventListener("change",()=>{

tasks[index].completed = checkbox.checked;

saveTasks();
renderTasks();

});


// TASK TEXT

const span = document.createElement("span");
span.textContent = task.text;

if(task.completed){
span.classList.add("completed");
}


// DELETE BUTTON

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "❌";

deleteBtn.style.border = "none";
deleteBtn.style.background = "transparent";
deleteBtn.style.cursor = "pointer";

deleteBtn.addEventListener("click",()=>{

tasks.splice(index,1);

saveTasks();
renderTasks();

});


// ADD ELEMENTS

li.appendChild(checkbox);
li.appendChild(span);
li.appendChild(deleteBtn);

taskList.appendChild(li);

});

}


// SAVE TASKS

function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks));

}


// ADD TASK

addTaskBtn.addEventListener("click",()=>{

const text = taskInput.value.trim();

if(text === "") return;

tasks.push({
text:text,
completed:false
});

taskInput.value="";

saveTasks();
renderTasks();

});


// ENTER KEY SUPPORT

taskInput.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){
addTaskBtn.click();
}

});


// INITIAL LOAD

renderTasks();