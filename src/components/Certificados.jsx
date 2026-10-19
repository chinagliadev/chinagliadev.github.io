import Reveal from './Reveal'
import { certificados } from '../data/certificados'

function Certificados() {
  return (
    <Reveal className="certificado mt-32">
      <h2 className="mt-4 text-center fs-1 fw-bold text-white">CERTIFICADO</h2>
      <p className="text-center text-white-50 mt-2 fs-6 w-100" style={{ maxWidth: "700px", margin: "0 auto" }}>
        Nesta seção estão reunidos alguns dos certificados que conquistei ao longo da minha jornada,
        refletindo meu compromisso com o aprendizado contínuo, o desenvolvimento de novas
        habilidades e a busca constante por evolução profissional.
      </p>

      <div className="container mt-5">
        <div className="row g-4">
          {certificados.map((cert) => (
            <div className="col-12 col-md-6" key={cert.titulo}>
              <div className="card-experiencia text-white background-glassmorphism">
                <div className="cabecalho-card d-flex gap-3">
                  <div className="container-img">
                    <img src={cert.logo} alt={cert.alt} />
                  </div>
                  <div className="informacoes-card">
                    <h3 className="fs-5 fw-bold">{cert.titulo}</h3>
                    <h4 className="fs-6 text-secondary">{cert.instituicao}</h4>
                  </div>
                </div>
                <hr />
                <p className="mt-3">{cert.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default Certificados
