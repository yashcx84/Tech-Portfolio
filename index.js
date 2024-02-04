let output = document.getElementById("date-obj");

let mydate = new Date();

output.innerHTML = "Buildx"+"@" + mydate.getFullYear();

// --
let ham = document.getElementById("ham");
let hamwindow = document.getElementById("ham-window");

ham.addEventListener('click', () => {
    hamwindow.classList.toggle("window-open");
});