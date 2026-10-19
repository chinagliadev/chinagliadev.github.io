import { useReveal } from '../hooks/useReveal'

function Reveal({ className = '', children }) {
  const [ref, ativo] = useReveal()

  return (
    <section ref={ref} className={`${className} reveal${ativo ? ' active' : ''}`}>
      {children}
    </section>
  )
}

export default Reveal
