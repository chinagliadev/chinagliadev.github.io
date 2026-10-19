import Reveal from './Reveal'

function Hero() {
  return (
    <Reveal className="hero p-4 d-flex align-items-center justify-content-center">
      <div className="bg-hero w-100 d-flex align-items-center justify-content-center">
        <div className="apresentacao text-white text-center d-flex flex-column fs-5">
          <h1 className="text-center titulo-apresentacao fw-bold">Olá, sou Chinaglia</h1>
          <p className="paragrafo-apresentacao text-white">
            Desenvolvedor Full Stack com foco em construir soluções robustas, do front-end intuitivo
            ao back-end eficiente
          </p>
          <div className="botoes-redes-sociais">
            <a target="_blank" href="https://www.linkedin.com/in/victor-chinaglia/" className="botoes-linkedin botoes-apresentacao">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default Hero
