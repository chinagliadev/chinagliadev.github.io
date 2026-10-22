import Modal from './Modal'
import imagens from '../../data/imagens'

function ModalControleFinanceiro({ aberto, onFechar }) {
  return (
    <Modal
      id="modal-controle-financeiro"
      titulo="Controle Financeiro"
      tituloId="modal-titulo-controle-financeiro"
      aberto={aberto}
      onFechar={onFechar}
    >
      <div id="carrosel-projeto-controle-financeiro" className="carousel slide mb-4">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={imagens.controleFinanceiro}
              className="d-block w-100 img-fluid"
              alt="Tela inicial do controle financeiro"
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carrosel-projeto-controle-financeiro" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carrosel-projeto-controle-financeiro" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h3>Objetivo Principal: Organização das Finanças Pessoais</h3>
      <p>
        O <strong>Controle Financeiro</strong> é um sistema desenvolvido para auxiliar no{' '}
        <strong>gerenciamento e organização das despesas pessoais</strong>. A aplicação permite
        registrar, consultar e acompanhar os gastos realizados, facilitando a visualização de como
        o dinheiro está sendo utilizado ao longo dos meses.
      </p>
      <p>
        As despesas são organizadas por categorias e períodos, e o usuário também pode controlar
        despesas parceladas, acompanhar vencimentos e ver quanto foi gasto em cada categoria.
      </p>

      <h4>Principais Funcionalidades:</h4>
      <ul>
        <li>
          <strong>Login e Cadastro:</strong> Autenticação com e-mail e senha, e criação de conta
          para novos usuários.
        </li>
        <li>
          <strong>Gestão de Despesas:</strong> Criar, editar e remover despesas, com modal de
          cadastro e confirmação de remoção.
        </li>
        <li>
          <strong>Vencimento e Parcelamento:</strong> Definição da quantidade de parcelas e
          acompanhamento individual do pagamento de cada uma.
        </li>
        <li>
          <strong>Gráfico por Categoria:</strong> Visualização dos gastos por categoria, como
          Alimentação, Transporte e Lazer, com filtro por mês.
        </li>
      </ul>

      <h4>Status das Despesas:</h4>
      <ul>
        <li>🔵 <strong>No prazo:</strong> vencimento a partir de 10 dias.</li>
        <li>🟡 <strong>Atenção:</strong> vencimento entre 6 e 9 dias.</li>
        <li>🔴 <strong>Urgente:</strong> vencimento hoje ou nos próximos 5 dias.</li>
        <li>🔴 <strong>Vencida:</strong> passou da data de vencimento sem pagamento registrado.</li>
        <li>🟢 <strong>Paga:</strong> despesa já marcada como paga.</li>
      </ul>

      <hr />
      <h3>Jornada do Projeto</h3>
      <p>
        O projeto foi desenvolvido <strong>Full Stack</strong>. O{' '}
        <strong>Back-End</strong> expõe os endpoints e funcionalidades em <strong>JSON</strong>,
        com autenticação via <strong>JWT</strong>. O <strong>Front-End</strong> foi construído com{' '}
        <strong>HTML5, JavaScript, jQuery e Bootstrap</strong>, integrando a interface com a API.
      </p>
      <p>
        O gráfico de despesas foi feito com a biblioteca <strong>Chart.js</strong> e é alimentado
        pelo endpoint <code>GET /despesas/totalCategoriaDespesas</code>, que retorna o total das
        despesas agrupadas por categoria e se atualiza quando o mês é trocado.
      </p>
      <p>
        A proposta é tornar o controle das finanças pessoais mais simples e acessível, ajudando o
        usuário a entender para onde seu dinheiro está indo.
      </p>

      <hr />
      <p className="text-center">
        <a
          href="https://github.com/chinagliadev/control-finance"
          target="_blank"
          className="botoes-projeto btn-glass"
          rel="noopener noreferrer"
        >
          Ver Código e Documentação Completa
        </a>
      </p>
    </Modal>
  )
}

export default ModalControleFinanceiro