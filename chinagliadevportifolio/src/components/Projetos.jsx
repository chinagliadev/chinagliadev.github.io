import Reveal from './Reveal'
import ListaTecnologias from './ListaTecnologias'
import { projetos } from '../data/projetos'

function Projetos({ onAbrirModal }) {
  return (
    <Reveal className="sessao-projetos mt-5">
      <h2 className="mt-4 text-center fs-1 fw-bold text-white">PROJETOS</h2>
      <p className="text-center text-white-50 mt-2 fs-6 w-100" style={{ maxWidth: "700px", margin: "0 auto" }}>
        Aqui você encontra alguns dos projetos que desenvolvi, reunindo criatividade, técnica e
        aprendizado contínuo. Cada projeto mostra um pouco da minha evolução como desenvolvedor.
      </p>

      <div className="container">
        <div className="container mt-5">
          <div className="row g-4">
            {projetos.map((projeto) => (
              <div className="col-12 col-sm-6 col-lg-4" key={projeto.modal}>
                <div className={`cards ${projeto.classe}`}>
                  <img src={projeto.imagem} alt={projeto.alt} />
                  <div className="card-body-projeto">
                    <ListaTecnologias tecnologias={projeto.tecnologias} />
                    <h2 className="fs-5">{projeto.titulo}</h2>
                    <p>{projeto.descricao}</p>
                  </div>
                  <div className="card-footer-botoes">
                    <button className="btn-ver-mais" onClick={() => onAbrirModal(projeto.modal)}>
                      Ver mais
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default Projetos
