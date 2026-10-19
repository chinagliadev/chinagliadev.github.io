const USUARIO = 'chinagliadev'
const API = 'https://api.github.com'

const LINGUAGENS_IGNORADAS = ['HTML', 'CSS', 'Portugol']

async function buscar(url, signal) {
  const response = await fetch(url, { signal })

  if (!response.ok) {
    throw new Error(`Erro HTTP: ${response.status}`)
  }

  return response.json()
}

export function getGitHubPerfil(signal) {
  return buscar(`${API}/users/${USUARIO}`, signal)
}

export function getGitHubRepositorio(signal) {
  return buscar(`${API}/users/${USUARIO}/repos`, signal)
}

export function getLinguagensRepositorio(dados) {
  if (!dados) {
    return []
  }

  return dados
    .filter((repo) => repo.language !== null && !LINGUAGENS_IGNORADAS.includes(repo.language))
    .map((repo) => repo.language)
}

export function agruparPorLinguagem(dados) {
  const grupoLinguagem = {}

  getLinguagensRepositorio(dados).forEach((linguagem) => {
    grupoLinguagem[linguagem] = (grupoLinguagem[linguagem] || 0) + 1
  })

  return grupoLinguagem
}

export function getTotalEstrelas(dados) {
  if (!dados) {
    return 0
  }

  return dados.reduce((soma, repo) => soma + repo.stargazers_count, 0)
}

export function getTopRepositorios(dados, quantidade = 2) {
  if (!dados) {
    return []
  }

  return [...dados].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, quantidade)
}
