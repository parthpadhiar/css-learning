const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActoveClasses();
        panel.classList.add("active");
    });
});

function removeActoveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}