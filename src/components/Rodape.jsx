function Rodape() {
  return (
    <footer className="rodape">
      <div className="container text-center">
        <h3 className="rodape-logo">Chinaglia</h3>
        <p className="rodape-descricao mt-2">
          Desenvolvedor Full Stack focado em criar soluções modernas, rápidas e eficientes.
        </p>
        <div className="rodape-redes mt-3">
          <a href="https://github.com/chinagliadev" target="_blank">
            <i className="bi bi-github"></i>
          </a>
          {' '}
          <a href="https://www.linkedin.com/in/victor-chinaglia/" target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>
          {' '}
          <a href="https://www.instagram.com/_chinaglia/" target="_blank">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
        <div className="rodape-info mt-3">
          <p>
            <i className="bi bi-envelope"></i>
            {' '}
            chinagliavictor47@gmail.com
          </p>
          <p>
            <i className="bi bi-geo-alt"></i>
            {' '}
            Americana, Brasil
          </p>
        </div>
        <p className="rodape-copy mt-4">© 2025 Chinaglia — Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Rodape
