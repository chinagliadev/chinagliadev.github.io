import Modal from './Modal'
import imagens from '../../data/imagens'

function ModalLeticiaDuarte({ aberto, onFechar }) {
  return (
    <Modal id="modal-fundacao-leticia-duarte" titulo="Sistema Leticia Duarte Web" tituloId="modal-titulo-leticia-duarte" aberto={aberto} onFechar={onFechar}>
      <div id="carrosel-projeto-leticia-duarte" className="carousel slide mb-4">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={imagens.loginSistemaLeticia}
              className="d-block w-100 img-fluid"
              alt="carrosel imagem do login do sistema leticia duarte"
            />
          </div>
          <div className="carousel-item">
            <img
              src={imagens.imgInicioSistemaLeticiaDuarte}
              className="d-block w-100 img-fluid"
              alt="carrosel imagem do inicio do sistema leticia duarte"
            />
          </div>
          <div className="carousel-item">
            <img
              src={imagens.imgCadastroLeticia}
              className="d-block w-100 img-fluid"
              alt="carrosel imagem do inicio do sistema leticia duarte"
            />
          </div>
          <div className="carousel-item">
            <img src={imagens.formularioSistemaLeticiaDuarte} className="d-block w-100 img-fluid" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carrosel-projeto-leticia-duarte" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          {' '}
          <span className="visually-hidden">Previous</span>
        </button>
        {' '}
        <button className="carousel-control-next" type="button" data-bs-target="#carrosel-projeto-leticia-duarte" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          {' '}
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h3>Objetivo Principal: Digitalização e Gestão Eficiente</h3>
      <p>
        O
        {' '}
        <strong>Sistema Leticia Duarte Web</strong>
        {' '}
        é uma ferramenta desenvolvida para
        {' '}
        <strong>otimizar a gestão de cadastros e informações</strong>
        {' '}
        dos assistidos da Fundação Leticia Duarte.
      </p>
      <p>
        Ele substitui o processo manual (papel e caneta) por um sistema digital ágil e centralizado,
        visando a organização e a eficiência administrativa.
      </p>
      <h4>Principais Benefícios:</h4>
      <ul>
        <li>
          <strong>Centralização de Dados:</strong>
          {' '}
          Todas as informações do aluno e sua família em um único local seguro.
        </li>
        <li>
          <strong>Eficiência Operacional:</strong>
          {' '}
          Redução do tempo gasto em tarefas de registro e busca manual.
        </li>
        <li>
          <strong>Decisão Baseada em Dados:</strong>
          {' '}
          Capacidade de gerar relatórios e documentos essenciais (PDFs).
        </li>
      </ul>
      <hr />
      <h3>Jornada do Projeto</h3>
      <p>
        Tive conhecimento da situação através do meu docente
        {' '}
        <strong>Paulo</strong>
        , do SENAC, que me apresentou o problema da Fundação:
        {' '}
        <strong>a matrícula dos alunos ainda era feita totalmente à mão</strong>
        , em folhas impressas.
      </p>
      <p>
        Com essa informação, entrei em contato com a diretora
        {' '}
        <strong>Alexandra</strong>
        , que confirmou o cenário e abriu a possibilidade de iniciarmos a transformação digital do
        processo.
      </p>
      <p>
        Recebi uma
        {' '}
        <strong>foto real da folha de matrícula</strong>
        {' '}
        utilizada pela instituição, e isso serviu como base para estruturar toda a experiência do
        usuário, organizando campos, etapas e necessidades reais.
      </p>
      <p>
        A partir disso, iniciei o trabalho de
        {' '}
        <strong>UI/UX do sistema</strong>
        , criando toda a interface no Figma. Após cerca de
        {' '}
        <strong>1 mês desenvolvendo o protótipo</strong>
        , apresentei para a diretora, que aprovou totalmente o design — liberando o desenvolvimento
        oficial.
      </p>
      <p>
        Durante a construção do sistema, utilizei
        {' '}
        <strong>PHP com PDO</strong>
        {' '}
        para garantir segurança e escalabilidade nas consultas ao banco, além de
        {' '}
        <strong>MariaDB</strong>
        {' '}
        como base de dados pela sua performance e robustez. Na parte visual, optei pelo
        {' '}
        <strong>Fomantic UI (Semantic)</strong>
        {' '}
        por oferecer componentes mais modernos e adequados ao fluxo de cadastro necessário pela
        Fundação.
      </p>
      <p>
        Após semanas de desenvolvimento, testes e melhorias, o projeto foi
        {' '}
        <strong>entregue com sucesso</strong>
        {' '}
        à Fundação Leticia Duarte. O sistema passou a ser utilizado oficialmente para as
        {' '}
        <strong>matrículas dos alunos de 2026</strong>
        , substituindo totalmente o processo manual e trazendo mais agilidade, organização e
        segurança para a instituição.
      </p>
      <hr />
      <p className="text-center">
        <a href="https://github.com/chinagliadev/sistema-leticia-duarte-web" target="_blank" className="botoes-projeto btn-glass" rel="noopener noreferrer">
          Ver Código e Proposta Completa
        </a>
      </p>
    </Modal>
  )
}

export default ModalLeticiaDuarte
