const button = document.getElementById("button");
const currentDate = new Date();
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayIndex = currentDate.getDay();
const currentDay = daysOfTheWeek[currentDayIndex];


console.log(` Today is ${currentDay}`);


button.addEventListener("click", () => {
    alert(`The current date is ${currentDate}`)
});
