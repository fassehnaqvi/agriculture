window.addEventListener("load", () => {
    alert("Welcome to Smart Agriculture ICT Project!");
});

const stats = document.querySelectorAll(".stat-box");

stats.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.transform = "scale(1.1)";
    });

    box.addEventListener("mouseout", () => {
        box.style.transform = "scale(1)";
    });
});
