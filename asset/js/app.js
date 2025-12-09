const fade = document.getElementById("fade");

document.querySelectorAll(".btn-ver-mais").forEach(btn => {
    btn.addEventListener("click", () => {

        const modalID = btn.getAttribute("data-modal");
        const modal = document.getElementById(modalID);

        modal.classList.remove("hide");
        modal.classList.add("show");

        fade.classList.remove("hide");
        fade.classList.add("show");

        document.body.classList.add("no-scroll");
    });
});

document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => {

        document.querySelectorAll(".show").forEach(el => {
            el.classList.add("hide");
            el.classList.remove("show");
        });

        fade.classList.add("hide");
        fade.classList.remove("show");

        document.body.classList.remove("no-scroll");
    });
});

fade.addEventListener("click", () => {

    document.querySelectorAll(".show").forEach(el => {
        el.classList.add("hide");
        el.classList.remove("show");
    });

    fade.classList.add("hide");
    fade.classList.remove("show");

    document.body.classList.remove("no-scroll");
});
