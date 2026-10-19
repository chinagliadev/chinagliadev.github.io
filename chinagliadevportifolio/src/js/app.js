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


async function getGitHubRepositorio() {
    const response = await fetch('https://api.github.com/users/chinagliadev/repos');

    if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
    }

    const dados = await response.json();

    carregarGraficoLinguagensRepositorio(dados);

    return dados;
}

async function getGitHubPerfil() {
    const response = await fetch('https://api.github.com/users/chinagliadev');

    if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
    }

    return response.json();
}



function getLiguagemRepositorio(dados) {
    if (!dados) {
        return [];
    }

    const linguagensIgnoradas = [
        "HTML",
        "CSS",
        "Portugol"
    ];

    return dados
        .filter(repo =>
            repo.language !== null &&
            !linguagensIgnoradas.includes(repo.language)
        )
        .map(repo => repo.language);
}

function agruparPorLinguagem(dados) {
    if (!dados) {
        return {};
    }

    const grupoLinguagem = {};
    const linguagensRepositorio = getLiguagemRepositorio(dados);

    linguagensRepositorio.forEach((linguagem) => {
        if (grupoLinguagem.hasOwnProperty(linguagem)) {
            grupoLinguagem[linguagem]++;
        } else {
            grupoLinguagem[linguagem] = 1;
        }
    });

    return grupoLinguagem;
}

function getTotalLinguagem(dados) {
    if (!dados) {
        return 0;
    }

    return getLiguagemRepositorio(dados).length;
}



const github_grafico = document.querySelector('#github-grafico');
let graficoLinguagens = null;

function carregarGraficoLinguagensRepositorio(dados) {
    const linguagensAgrupadas = agruparPorLinguagem(dados);

    if (graficoLinguagens) {
        graficoLinguagens.destroy();
    }

    const ctx = github_grafico.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 400, 0);
    gradient.addColorStop(0, "rgba(124, 58, 237, 0.85)");
    gradient.addColorStop(1, "rgba(0, 180, 216, 0.85)");

    graficoLinguagens = new Chart(github_grafico, {
        type: "bar",
        data: {
            labels: Object.keys(linguagensAgrupadas),
            datasets: [{
                label: "Repositórios",
                data: Object.values(linguagensAgrupadas),
                backgroundColor: gradient,
                borderColor: "rgba(255, 255, 255, 0.3)",
                borderWidth: 1,
                borderRadius: 8,
                barPercentage: 0.7
            }]
        },
        options: {
            indexAxis: "y",
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: "rgba(30, 30, 40, 0.7)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    borderWidth: 1,
                    titleColor: "#fff",
                    bodyColor: "#e5e5e5",
                    padding: 10,
                    cornerRadius: 8
                }
            },
            scales: {
                x: {
                    grid: {
                        color: "rgba(255, 255, 255, 0.08)"
                    },
                    ticks: {
                        color: "rgba(255, 255, 255, 0.7)"
                    }
                },
                y: {
                    grid: {
                        color: "rgba(255, 255, 255, 0.05)"
                    },
                    ticks: {
                        color: "rgba(255, 255, 255, 0.85)"
                    }
                }
            }
        }
    });
}



async function montarCardGithubPerfil() {
    try {
        const [perfil, repositorios] = await Promise.all([
            getGitHubPerfil(),
            getGitHubRepositorio()
        ]);

        document.getElementById("username_github").innerText = "@" + perfil.login;
        document.getElementById("name_github").innerText = perfil.name;

        const totalEstrelas = repositorios.reduce(
            (soma, repo) => soma + repo.stargazers_count,
            0
        );

        document.getElementById("total_estrelas").innerText = totalEstrelas;
        document.getElementById("total_seguidores").innerText = perfil.followers;
        document.getElementById("total_repositorios").innerText = perfil.public_repos;
        document.getElementById("foto-github-stats").src = perfil.avatar_url;
        document.getElementById("foto-github-stats").alt = `Foto de perfil de ${perfil.login}`;

    } catch (error) {
        console.error(error);
    }
}


montarCardGithubPerfil();

function carregarTopRepositorios(dados) {
    const lista = document.getElementById("lista-top-repos");
    if (!lista) return;

    const top3 = [...dados]
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 2);

    lista.innerHTML = "";

    top3.forEach(repo => {
        const item = document.createElement("li");
        item.innerHTML = `
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="item-top-repo">
                <span class="item-top-repo-nome">${repo.name}</span>
                <span class="item-top-repo-estrelas">
                    <i class="bi bi-star-fill"></i> ${repo.stargazers_count}
                </span>
            </a>
        `;
        lista.appendChild(item);
    });
}

async function getGitHubRepositorio() {
    const response = await fetch('https://api.github.com/users/chinagliadev/repos');

    if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
    }

    const dados = await response.json();

    carregarGraficoLinguagensRepositorio(dados);
    carregarTopRepositorios(dados);

    return dados;
}