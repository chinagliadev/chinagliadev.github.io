import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CarrosselTecnologias from './components/CarrosselTecnologias'
import Sobre from './components/Sobre'
import Experiencia from './components/Experiencia'
import Github from './components/Github'
import Projetos from './components/Projetos'
import Certificados from './components/Certificados'
import Rodape from './components/Rodape'
import ModalDragonBall from './components/modais/ModalDragonBall'
import ModalLeticiaDuarte from './components/modais/ModalLeticiaDuarte'
import ModalTruco from './components/modais/ModalTruco'
import ModalStudioBelle from './components/modais/ModalStudioBelle'
import ModalWeather from './components/modais/ModalWeather'

function App() {
  // id do modal aberto (ou null quando nenhum está aberto)
  const [modalAberto, setModalAberto] = useState(null)

  const fecharModal = () => setModalAberto(null)

  // trava a rolagem da página enquanto há um modal aberto
  useEffect(() => {
    document.body.classList.toggle('no-scroll', modalAberto !== null)
  }, [modalAberto])

  return (
    <>
      <div id="fade" className={modalAberto ? 'show' : 'hide'} onClick={fecharModal}></div>
      <Header />
      <Hero />
      <CarrosselTecnologias />
      <Sobre />
      <Experiencia />
      <Github />
      <Projetos onAbrirModal={setModalAberto} />
      <Certificados />
      <Rodape />

      <ModalDragonBall aberto={modalAberto === 'modal-dragonball-explore'} onFechar={fecharModal} />
      <ModalLeticiaDuarte aberto={modalAberto === 'modal-fundacao-leticia-duarte'} onFechar={fecharModal} />
      <ModalTruco aberto={modalAberto === 'modal-truco'} onFechar={fecharModal} />
      <ModalStudioBelle aberto={modalAberto === 'modal-studio-belle'} onFechar={fecharModal} />
      <ModalWeather aberto={modalAberto === 'modal-weahter'} onFechar={fecharModal} />
    </>
  )
}

export default App
