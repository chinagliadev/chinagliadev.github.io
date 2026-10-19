import Modal from './Modal'

function ModalDragonBall({ aberto, onFechar }) {
  return (
    <Modal id="modal-dragonball-explore" titulo="DRAGON BALL EXPLORE" aberto={aberto} onFechar={onFechar}>
      <div className="modal-img-body mb-4">
        <div className="ratio ratio-16x9">
          {aberto && (
            <iframe
              id="dragonBallApi"
              src="https://www.youtube.com/embed/TJADcKyKVMk"
              title="Dragon Ball API - Demonstração"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
      <h3>Objetivo Principal: Explorar a API</h3>
      <p>
        Este projeto foi desenvolvido com foco em consumo de API REST para listar e detalhar
        personagens de Dragon Ball. Utiliza requisições assíncronas para carregar os dados e
        apresenta um design focado na temática do anime.
      </p>
      <p className="mt-3">
        Tecnologias Adicionais: A interface foi estilizada usando
        {' '}
        <strong>bootstrap</strong>
        {' '}
        para garantir um layout responsivo e moderno. Além disso, utilizei a biblioteca
        {' '}
        <strong>Vibrant.js</strong>
        {' '}
        para extrair cores dominantes das imagens dos personagens, aplicando-as dinamicamente ao
        fundo e a detalhes visuais.
      </p>
      <hr />
      <p className="text-center">
        <a href="https://chinagliadev.github.io/dragonball-explorer/index.html" target="_blank" className="botoes-projeto btn-glass" rel="noopener noreferrer">
          Ver Projeto
        </a>
        {' '}
        <a href="https://github.com/chinagliadev/dragonball-explorer" target="_blank" className="botoes-projeto btn-glass" rel="noopener noreferrer">
          Ver Código no GitHub
        </a>
      </p>
    </Modal>
  )
}

export default ModalDragonBall
