function setActive(element) {
    if(element.classList.contains("dark-mode")) {
        element.innerText = "Switch to light mode";
        element.classList.remove("dark-mode");
        element.style.backgroundColor = "#222222";
        element.style.color = "#ffffff";
    } else {
        element.innerText = "Switch to dark mode";
        element.classList.add("dark-mode");
        element.style.backgroundColor = "white";
        element.style.color = "black";
    }
}