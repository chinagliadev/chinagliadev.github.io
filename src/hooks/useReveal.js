import { useEffect, useRef, useState } from 'react'

// Efeito "reveal": adiciona a classe "active" quando a seção entra na tela
// (substitui o IntersectionObserver do antigo app.js)
export function useReveal(threshold = 0.2) {
  const ref = useRef(null)
  const [ativo, setAtivo] = useState(false)

  useEffect(() => {
    const elemento = ref.current
    if (!elemento) return

    const observer = new IntersectionObserver(
      ([entry]) => setAtivo(entry.isIntersecting),
      { threshold },
    )
    observer.observe(elemento)

    return () => observer.disconnect()
  }, [threshold])

  return [ref, ativo]
}
