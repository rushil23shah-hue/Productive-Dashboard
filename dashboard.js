document.addEventListener("DOMContentLoaded", function(){

// DARK MODE TOGGLE
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
});


// QUOTE GENERATOR
const quotes = [

"Push yourself, because no one else will do it for you.",
"Small progress is still progress.",
"Success is the sum of small efforts repeated daily.",
"Discipline beats motivation.",
"Your future is created by what you do today.",
"Stay consistent. Results will come."

];

const quoteText = document.getElementById("quoteText");
const newQuoteBtn = document.getElementById("newQuoteBtn");

newQuoteBtn.addEventListener("click", () => {

const randomIndex = Math.floor(Math.random() * quotes.length);
quoteText.textContent = quotes[randomIndex];

});


// PROGRESS BAR
const tasksCompleted = document.getElementById("tasksCompleted");
const tasksTotal = document.getElementById("tasksTotal");
const progressFill = document.getElementById("progressFill");
const motivationalMessage = document.getElementById("motivationalMessage");

function updateProgress(){

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let completedTasks = tasks.filter(task => task.completed).length;
let totalTasks = tasks.length;

tasksCompleted.textContent = completedTasks;
tasksTotal.textContent = totalTasks;

if(totalTasks === 0){
progressFill.style.width = "0%";
motivationalMessage.textContent = "Add your first task to start being productive 🚀";
return;
}

let progressPercent = (completedTasks / totalTasks) * 100;
progressFill.style.width = progressPercent + "%";


if(completedTasks === totalTasks){
motivationalMessage.textContent = "Amazing! You completed everything today 🔥";
}

else if(completedTasks > 0){
motivationalMessage.textContent = "Great progress! Keep going 💪";
}

}

updateProgress();

});