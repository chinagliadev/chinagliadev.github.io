import { useEffect, useState } from 'react'
import { getGitHubPerfil, getGitHubRepositorio } from '../utils/github'

// Busca o perfil e os repositórios do GitHub (substitui as funções fetch do antigo app.js)
export function useGithub() {
  const [perfil, setPerfil] = useState(null)
  const [repositorios, setRepositorios] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    function tratarErro(error) {
      if (error.name !== 'AbortError') console.error(error)
    }

    getGitHubPerfil(controller.signal).then(setPerfil).catch(tratarErro)
    getGitHubRepositorio(controller.signal).then(setRepositorios).catch(tratarErro)

    return () => controller.abort()
  }, [])

  return { perfil, repositorios }
}
