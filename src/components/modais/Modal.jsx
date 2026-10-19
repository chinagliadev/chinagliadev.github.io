// Estrutura comum dos modais (cabeçalho com título + botão de fechar e corpo)
function Modal({ id, titulo, tituloId, aberto, onFechar, children }) {
  return (
    <div id={id} className={`${aberto ? 'show' : 'hide'} text-white`}>
      <div className="modal-header">
        <h2 id={tituloId} className="titulo-modal text-white">
          {titulo}
        </h2>
        <button className="fechar-modal" onClick={onFechar}>
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
      <div className="modal-body">{children}</div>
    </div>
  )
}

export default Modal
