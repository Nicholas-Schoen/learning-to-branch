const button = document.getElementById("yo-mama")
const currentDate = new Date();

console.log(`The current date is ${currentDate}`);

button.addEventListener("click", () => {
    alert(`The current date is ${currentDate}`)
});
