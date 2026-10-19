import { iconesCarrossel } from '../data/carrossel'

// cada lista repete os ícones duas vezes para o efeito de rolagem infinita
const icones = [...iconesCarrossel, ...iconesCarrossel]

function ListaIcones(props) {
  return (
    <ul className="carrossel-tecnologias" {...props}>
      {icones.map((icone, i) => (
        <li key={`${icone.nome}-${i}`}>
          <img src={icone.src} alt="" style={icone.invertida ? { filter: 'invert(1)' } : undefined} />
        </li>
      ))}
    </ul>
  )
}

function CarrosselTecnologias() {
  return (
    <div className="carrossel-container">
      <ListaIcones />
      <ListaIcones aria-hidden="true" />
    </div>
  )
}

export default CarrosselTecnologias
