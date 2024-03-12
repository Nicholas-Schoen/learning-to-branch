const button = document.getElementById("button");
const currentDate = new Date();

//gets Day of the week name
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayIndex = currentDate.getDay();
const currentDay = daysOfTheWeek[currentDayIndex];

//gets Name of Month 
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentMonthIndex = currentDate.getMonth();
const currentMonth =monthNames[currentMonthIndex];

console.log(` Today is ${currentDay}, in the month of ${currentMonth}.`);


button.addEventListener("click", () => {
    alert(`The current date is ${currentDate}`)
});
