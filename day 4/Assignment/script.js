document.addEventListener("DOMContentLoaded", function () {
    const box2 = document.getElementById("box2");

    box2.addEventListener("mouseover", function () {
        box2.style.background = "url('4752200.jpg') center/cover no-repeat";
    });

    box2.addEventListener("mouseout", function () {
        box2.style.background = "linear-gradient(135deg, #ff758c, #ff7eb3)";
    });

    document.querySelectorAll(".magic-box").forEach(box => {
        box.addEventListener("click", function () {
            this.style.borderRadius = "50%";
        });
    });
});
