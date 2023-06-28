const logo = document.getElementById("logo");
const screen = document.querySelector(".screen");
const text = document.querySelector("h1");

logo.addEventListener("click", function () {
    alert("system on");
    screen.style.background = "#444";
    text.textContent = "Hello World!";
});
