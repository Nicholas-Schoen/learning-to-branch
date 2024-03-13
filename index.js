const button = document.getElementById("button");
const currentDate = new Date();
const dayOfTheMonth = currentDate.getDate();

//gets Day of the week name
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayIndex = currentDate.getDay();
const currentDay = daysOfTheWeek[currentDayIndex];

//gets Name of Month 
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentMonthIndex = currentDate.getMonth();
const currentMonth =monthNames[currentMonthIndex];

//gets year
const currentYear = currentDate.getFullYear();

//pop-up element variables
const paragraphElement = document.createElement('p');
paragraphElement.setAttribute("id", "new-paragraph-element")


console.log(` Today is ${currentDay}, in the month of ${currentMonth}. The Year is ${currentYear} AD.`);

function showDate() {
    button.insertAdjacentElement("afterend", paragraphElement);
    paragraphElement.textContent = `Today is ${currentDay}, ${currentMonth} ${dayOfTheMonth}, ${currentYear}.`
};

button.addEventListener("click", showDate);

/*
button.addEventListener("click", () => {
    alert(`The current date is ${currentDate}`)
});
*/