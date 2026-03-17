// SELECT ELEMENTS
const workoutBtn = document.getElementById("workoutBtn");
const currentStreakEl = document.getElementById("currentStreak");
const bestStreakEl = document.getElementById("bestStreak");


// LOAD DATA FROM LOCAL STORAGE
let fitnessData = JSON.parse(localStorage.getItem("fitnessData")) || {
currentStreak: 0,
bestStreak: 0,
lastWorkoutDate: null
};


// UPDATE UI
function updateUI(){
currentStreakEl.textContent = fitnessData.currentStreak;
bestStreakEl.textContent = fitnessData.bestStreak;
}


// DATE HELPER
function getTodayDate(){
return new Date().toISOString().split("T")[0];
}


// WORKOUT BUTTON CLICK
workoutBtn.addEventListener("click", () => {

const today = getTodayDate();
const lastDate = fitnessData.lastWorkoutDate;

// IF USER ALREADY MARKED TODAY
if(lastDate === today){
alert("You already marked today's workout 💪");
return;
}

// CHECK YESTERDAY
let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
yesterday = yesterday.toISOString().split("T")[0];

// IF CONTINUED STREAK
if(lastDate === yesterday){
fitnessData.currentStreak += 1;
}
else{
fitnessData.currentStreak = 1;
}

// UPDATE BEST STREAK
if(fitnessData.currentStreak > fitnessData.bestStreak){
fitnessData.bestStreak = fitnessData.currentStreak;
}

// SAVE DATE
fitnessData.lastWorkoutDate = today;

// SAVE TO LOCAL STORAGE
localStorage.setItem("fitnessData", JSON.stringify(fitnessData));

// UPDATE UI
updateUI();

});


// INITIAL LOAD
updateUI();