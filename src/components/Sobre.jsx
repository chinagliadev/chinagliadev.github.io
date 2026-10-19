import Reveal from './Reveal'

function Sobre() {
  return (
    <Reveal className="sessao-sobre">
      <h2 className="mt-3 text-center fs-1 fw-bold text-white mb-5">SOBRE MIM</h2>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="conteudo-sobre card-glow card-glow-blue">
              <h2>Victor Chinaglia</h2>
              <p className="paragrafo-sobremim">
                Meu nome é Victor Chinaglia, tenho 22 anos e sou desenvolvedor backend em formação,
                com foco em criar APIs sólidas, seguras e escaláveis.
                <br />
                <br />
                Sou formado em Análise e Desenvolvimento de Sistemas e atualmente estudo Node.js,
                Express e MongoDB. Tenho desenvolvido projetos práticos que envolvem banco de dados,
                autenticação e boas práticas de arquitetura.
                <br />
                <br />
                Já trabalhei com Java Desktop (Swing), PHP, C#, JavaScript e Node.js, criando CRUDs,
                sistemas de login, páginas dinâmicas e aplicações completas.
                <br />
                <br />
                Meu diferencial é a dedicação em entender como cada parte do sistema funciona por
                dentro, sempre buscando escrever um código limpo, organizado e fácil de manter.
                <br />
                <br />
                No momento, busco uma oportunidade na área de desenvolvimento, onde eu possa aplicar
                meus conhecimentos e continuar evoluindo ao lado de profissionais experientes.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-12">
                <div className="conteudo-habilidades card-glow card-glow-green">
                  <h2>Habilidades</h2>
                  <ul className="lista-skills">
                    <li>Node.js & Express (APIs REST)</li>
                    <li>MongoDB & Mongoose (modelagem, agregações)</li>
                    <li>MySQL / MariaDB (consultas, joins, otimização)</li>
                    <li>JavaScript ES6+ (assíncrono, async/await)</li>
                    <li>PHP (CRUD, MVC, PDO)</li>
                    <li>Java (POO, Swing, JDBC)</li>
                    <li>Git & GitHub (branches, PRs, versionamento)</li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="conteudo-academico card-glow card-glow-orange">
                  <h3>Soft Skills</h3>
                  <ul className="lista-skills">
                    <li>Comunicação e Trabalho em Equipe</li>
                    <li>Resolução de Problemas e Pensamento Lógico</li>
                    <li>Proatividade e Iniciativa</li>
                    <li>Foco em Resultados</li>
                    <li>Organização e Gestão de Tempo</li>
                    <li>Adaptabilidade e Aprendizado Rápido</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default Sobre
