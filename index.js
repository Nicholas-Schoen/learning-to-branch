const button = document.getElementById("button")
const currentDate = new Date();

console.log(`The current date is ${currentDate}`);

button.addEventListener("click", () => {
    alert(`The current date is ${currentDate}`)
});
