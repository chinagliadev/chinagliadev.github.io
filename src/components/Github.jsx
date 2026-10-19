import Reveal from './Reveal'
import GraficoLinguagens from './GraficoLinguagens'
import imagens from '../data/imagens'
import { useGithub } from '../hooks/useGithub'
import { getTopRepositorios, getTotalEstrelas } from '../utils/github'

function Github() {
  const { perfil, repositorios } = useGithub()

  return (
    <Reveal className="sessao-github">
      <h2 className="mt-3 text-center fs-1 fw-bold text-white mb-2">GITHUB</h2>
      <p
        className="text-center text-white-50 mt-2 fs-6 w-100 mb-4"
        style={{ maxWidth: '700px', margin: '0 auto' }}
      >
        Confira algumas estatísticas do meu GitHub, como estrelas, seguidores e repositórios,
        refletindo um pouco da minha jornada como desenvolvedor.
      </p>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="conteudo-sobre">
              <div className="stats-gituhb">
                <img src={imagens.banner} alt="" className="img-banner-github" />
              </div>

              <div className="stats-gituhb mt-2">
                <div className="stats-gituhb">
                  <div className="card-stats background-glassmorphism d-flex justify-content-between flex-column">
                    <header className="header-card">
                      <h2 id="name_github" className="fs-5">
                        {perfil?.name}
                      </h2>
                      <h3 className="fs-6 text-secondary" id="username_github">
                        {perfil && '@' + perfil.login}
                      </h3>
                    </header>

                    <div className="lista-itens-stats">
                      <div className="item-stats ">
                        <span className="fs-6">
                          <i className="bi bi-star-fill"></i>{' '}
                          <span id="total_estrelas">{getTotalEstrelas(repositorios)}</span>
                        </span>
                        <h2 className="mt-1">Estrelas</h2>
                      </div>
                      <div className="item-stats">
                        <span className="fs-6">
                          <i className="bi bi-person-fill"></i>{' '}
                          <span id="total_seguidores">{perfil ? perfil.followers : 0}</span>
                        </span>
                        <h2 className="mt-1">Seguidores</h2>
                      </div>
                      <div className="item-stats">
                        <span className="fs-6">
                          <i className="bi bi-file-earmark-code"></i>{' '}
                          <span id="total_repositorios">{perfil ? perfil.public_repos : 0}</span>
                        </span>
                        <h2 className="mt-1">Repositórios</h2>
                      </div>
                    </div>
                  </div>
                  <div className="card-stats background-glassmorphism">
                    <img src={imagens.gitProjects} alt="" className="img-banner-project" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="conteudo-sobre">
              <div className="stats-gituhb">
                <div className="card-stats background-glassmorphism ">
                  <img
                    src={perfil?.avatar_url}
                    id="foto-github-stats"
                    alt={perfil ? `Foto de perfil de ${perfil.login}` : ''}
                    className="foto-perfil-stats"
                  />
                  <a href="https://github.com/chinagliadev" className="button-gitub" target="_blank">
                    <div className="icon">
                      <i className="bi bi-arrow-up-right"></i>
                    </div>
                    <div className="w-100 text-center">
                      <span>Git Hub</span>
                    </div>
                  </a>
                </div>

                <div className="card-stats background-glassmorphism ">
                  <header className="header-card">
                    <h3 className="fs-6">Lingugens mais utlizada</h3>

                    <div className="body-card">
                      <GraficoLinguagens repositorios={repositorios} />
                    </div>
                  </header>
                </div>
              </div>

              <div className="stats-gituhb mt-2">
                <div className="card-stats background-glassmorphism top-repos-card">
                  <h3 className="fs-6 mb-3">Top Repositórios</h3>
                  <ul id="lista-top-repos" className="lista-top-repos">
                    {getTopRepositorios(repositorios).map((repo) => (
                      <li key={repo.id}>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="item-top-repo"
                        >
                          <span className="item-top-repo-nome">{repo.name}</span>
                          <span className="item-top-repo-estrelas">
                            <i className="bi bi-star-fill"></i> {repo.stargazers_count}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default Github
