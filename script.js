
//collecting html element
const themeToggle = document.querySelector(".themeToggle");

//function to toggle between themes
function toggleTheme() {
    const body = document.querySelector("body");
    body.classList.toggle("darkTheme");
}

toggleTheme();

