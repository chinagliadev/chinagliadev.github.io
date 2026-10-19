import Reveal from './Reveal'
import ListaTecnologias from './ListaTecnologias'
import { experiencias } from '../data/experiencias'

function Experiencia() {
  return (
    <Reveal className="sessao-experiencia">
      <h2 className="mt-4 text-center fs-1 fw-bold text-white">EXPERIÊNCIA</h2>
      <p className="text-center text-white-50 mt-2 fs-6 w-100" style={{ maxWidth: "700px", margin: "0 auto" }}>
        Nesta seção apresento minhas experiências acadêmicas e profissionais, onde tive a
        oportunidade de aplicar conhecimentos técnicos, resolver problemas reais e aprimorar minhas
        habilidades como desenvolvedor ao longo do aprendizado contínuo.
      </p>

      <div className="container mt-5 d-flex justify-content-center">
        <div className="row g-4">
          {experiencias.map((exp) => (
            <div className="col-12 col-sm-6" key={exp.empresa}>
              <div className="card-experiencia text-white background-glassmorphism">
                <header className="d-flex align-items-center justify-content-between mb-3">
                  <ListaTecnologias tecnologias={exp.tecnologias} />
                  <p className="text-white m-0">{exp.periodo}</p>
                </header>
                <div className="cabecalho-card d-flex gap-3">
                  <div className="informacoes-card">
                    <h3 className="fs-5 fw-bold">{exp.cargo}</h3>
                    <h4 className="fs-6 text-secondary">{exp.empresa}</h4>
                  </div>
                </div>
                <hr />
                <p className="mt-3">{exp.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default Experiencia
