import Modal from './Modal'
import imagens from '../../data/imagens'

function ModalStudioBelle({ aberto, onFechar }) {
  return (
    <Modal id="modal-studio-belle" titulo="Studio Belle - Gerenciamento de Agendamento" aberto={aberto} onFechar={onFechar}>
      <div className="modal-img-body mb-4">
        <img width="100%" src={imagens.studioBelle} alt="" />
      </div>
      <h3>Objetivo Principal: Gestão inteligente de agendamentos</h3>
      <p>
        Transformando a gestão de salões com tecnologia, o
        {' '}
        <strong>Studio Belle</strong>
        {' '}
        nasceu da necessidade de organizar, otimizar e profissionalizar a rotina de salões de beleza
        e centros de estética. O projeto foi desenvolvido como um ecossistema de gerenciamento
        completo, indo além de uma simples agenda digital, integrando eficiência operacional,
        controle administrativo e inteligência de dados em uma única plataforma web.
      </p>
      <p>
        Desenvolvido com
        {' '}
        <strong>PHP e JavaScript</strong>
        , o sistema segue uma arquitetura modular, segura e escalável. Conta com gestão inteligente
        de agendamentos utilizando o
        {' '}
        <strong>FullCalendar</strong>
        , dashboards com métricas e KPIs em tempo real através do
        {' '}
        <strong>Chart.js</strong>
        , além de um controle de acesso hierárquico (Admin/User), garantindo segurança e organização
        para cada perfil de usuário.
      </p>
      <p>
        O Studio Belle foi pensado para atender o dia a dia corrido dos profissionais da beleza,
        oferecendo mais controle, produtividade e uma visão estratégica do negócio por meio da
        tecnologia.
      </p>
      <hr />
      <p className="text-center">
        <a href="https://github.com/chinagliadev/sistema-agendamento-salao" target="_blank" className="botoes-projeto btn-glass" rel="noopener noreferrer">
          Ver Código no GitHub
        </a>
        {' '}
        <a href={"https://www.linkedin.com/posts/victor-chinaglia_desenvolvimentoweb-fullstack-php-activity-7414374641005133824-5zg9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEUu890BEctVzQXd_I4FxB9flrzpaalF3Ac"} target="_blank" className="botoes-projeto btn-glass" rel="noopener noreferrer">
          Ver Projeto
        </a>
      </p>
    </Modal>
  )
}

export default ModalStudioBelle
