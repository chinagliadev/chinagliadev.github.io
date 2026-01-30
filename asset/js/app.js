const fade = document.getElementById("fade");

document.querySelectorAll(".btn-ver-mais").forEach(btn => {
    btn.addEventListener("click", () => {

        const modalID = btn.dataset.modal;
        if (!modalID) return;

        const modal = document.getElementById(modalID);
        if (!modal) return;

        modal.classList.remove("hide");
        modal.classList.add("show");

        fade.classList.remove("hide");
        fade.classList.add("show");

        document.body.classList.add("no-scroll");
    });
});


document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", fecharModal);
});


fade.addEventListener("click", fecharModal);

function fecharModal() {
    document.querySelectorAll(".show").forEach(el => {
        el.classList.add("hide");
        el.classList.remove("show");
    });

    fade.classList.add("hide");
    fade.classList.remove("show");

    document.body.classList.remove("no-scroll");
}

const modal = document.getElementById("modal-studio-belle");
const iframe = document.getElementById("studioBelleVideo");

function abrirVideoStudioBelle() {
     const videoId = "cshA86x3E2U";
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.classList.remove("hide");
}

function fecharModalStudioBelle() {
    iframe.src = "";
    modal.classList.add("hide");
}

document.querySelector("[data-close]").addEventListener("click", fecharModalStudioBelle);

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    },
    {
        threshold: 0.2
    }
);

reveals.forEach(reveal => observer.observe(reveal));


