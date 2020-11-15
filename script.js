const themeToggle = document.getElementById("themeToggle");
const mainCont = document.getElementById("mainCont");
//invert

let currentTheme = localStorage.getItem("ing-theme");
if (currentTheme == null) {
    currentTheme = "light";
    localStorage.setItem("ing-theme", currentTheme);
} else if (currentTheme === "dark") {
    mainCont.classList.add("invert");
};

themeToggle.addEventListener("click", (e) => {
    if (currentTheme === "light") {
        currentTheme = "dark";
        mainCont.classList.add("invert");
    } else if (currentTheme === "dark") {
        currentTheme = "light";
        mainCont.classList.remove("invert");
    };
    localStorage.setItem("ing-theme", currentTheme);
});