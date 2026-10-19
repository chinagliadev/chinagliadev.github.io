import Modal from './Modal'
import imagens from '../../data/imagens'

function ModalTruco({ aberto, onFechar }) {
  return (
    <Modal id="modal-truco" titulo="Placar Truco - Casal" aberto={aberto} onFechar={onFechar}>
      <div className="modal-img-body mb-4">
        <img src={imagens.placarTrucoModal} className="img-fluid" alt="" />
      </div>
      <h3>Objetivo Principal: Placar Digital</h3>
      <p>
        Eu e minha namorada sempre jogávamos truco, mas não tínhamos um placar prático para anotar
        os pontos. Chegamos a procurar aplicativos, porém nenhum tinha a nossa cara. Então decidi
        transformar essa necessidade em uma oportunidade para treinar minhas habilidades: criei um
        placar digital simples, moderno e feito especialmente para nós.
      </p>
      <hr />
      <p className="text-center">
        <a href="https://chinagliadev.github.io/truco-placar-casal/" target="_blank" className="botoes-projeto btn-glass" rel="noopener noreferrer">
          Ver Projeto
        </a>
        {' '}
        <a href="https://github.com/chinagliadev/truco-placar-casal" target="_blank" className="botoes-projeto btn-glass" rel="noopener noreferrer">
          Ver Código no GitHub
        </a>
      </p>
    </Modal>
  )
}

export default ModalTruco
