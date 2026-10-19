import Modal from './Modal'
import imagens from '../../data/imagens'

function ModalWeather({ aberto, onFechar }) {
  return (
    <Modal id="modal-weahter" titulo="WEATHER WEB" aberto={aberto} onFechar={onFechar}>
      <div className="modal-img-body mb-4">
        <img width="100%" src={imagens.apresentacaoaWeather} alt="" />
      </div>
      <h3>Objetivo Principal: Explorar a API OpenWeather</h3>
      <p>
        Este projeto foi desenvolvido com foco no consumo da API REST do
        {' '}
        <strong>OpenWeather</strong>
        , permitindo a consulta de informações climáticas em tempo real, como temperatura, sensação
        térmica, umidade e condições do tempo a partir da busca por cidades. As requisições
        assíncronas garantem uma experiência dinâmica e responsiva.
      </p>
      <p className="mt-3">
        Tecnologias Adicionais: A interface foi estilizada utilizando
        {' '}
        <strong>Bootstrap</strong>
        {' '}
        para garantir um layout responsivo e moderno. O consumo da API foi realizado com
        {' '}
        <strong>JavaScript</strong>
        {' '}
        e
        {' '}
        <strong>Fetch API</strong>
        , permitindo a atualização dos dados climáticos de forma rápida e eficiente conforme a
        interação do usuário.
      </p>
      <hr />
      <p className="text-center">
        <a href="https://chinagliadev.github.io/WeatherWeb/" target="_blank" className="botoes-projeto btn-glass" rel="noopener noreferrer">
          Ver Projeto
        </a>
        {' '}
        <a href="https://github.com/chinagliadev/WeatherWeb" target="_blank" className="botoes-projeto btn-glass" rel="noopener noreferrer">
          Ver Código no GitHub
        </a>
      </p>
    </Modal>
  )
}

export default ModalWeather
