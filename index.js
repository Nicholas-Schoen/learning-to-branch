const button = document.getElementById("button");
const currentDate = new Date();
const dayOfTheMonth = currentDate.getDate();
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayIndex = currentDate.getDay();
const currentDay = daysOfTheWeek[currentDayIndex];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentMonthIndex = currentDate.getMonth();
const currentMonth =monthNames[currentMonthIndex];
const currentYear = currentDate.getFullYear();
const paragraphElement = document.createElement('p');


paragraphElement.setAttribute("id", "new-paragraph-element")


function showDate() {
    button.insertAdjacentElement("afterend", paragraphElement);
    paragraphElement.textContent = 
        `Today is ${currentDay}, ${currentMonth} ${dayOfTheMonth}, ${currentYear}.`;
    button.innerText = "Hide me!";
};

function hideDate() {
    paragraphElement.remove();
    button.innerText = "Click me!"
};

function checkDate() {
    if (button.innerText === "Click me!") {
        showDate();
        return;
    } else {
        hideDate();
        return;
    };
};

button.addEventListener("click", checkDate);