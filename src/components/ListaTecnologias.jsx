import { tecnologias as todas } from '../data/tecnologias'

function ListaTecnologias({ tecnologias }) {
  return (
    <ul className="lista-linguagem-projeto">
      {tecnologias.map((chave) => (
        <li key={chave} data-legenda={todas[chave].legenda}>
          <img src={todas[chave].imagem} alt="" />
        </li>
      ))}
    </ul>
  )
}

export default ListaTecnologias
