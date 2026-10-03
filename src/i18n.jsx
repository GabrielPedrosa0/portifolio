import { createContext, useContext, useEffect, useState } from 'react'
import conteudo from './data/conteudo.js'

const IdiomaContext = createContext(null)

function idiomaInicial() {
  try {
    const salvo = localStorage.getItem('idioma')
    if (salvo === 'pt' || salvo === 'en') return salvo
  } catch {}
  return 'pt'
}

export function IdiomaProvider({ children }) {
  const [idioma, setIdioma] = useState(idiomaInicial)

  useEffect(() => {
    document.documentElement.lang = idioma === 'pt' ? 'pt-BR' : 'en'
    document.title = conteudo[idioma].meta.titulo
    try {
      localStorage.setItem('idioma', idioma)
    } catch {}
  }, [idioma])

  const alternar = () => setIdioma((atual) => (atual === 'pt' ? 'en' : 'pt'))

  return (
    <IdiomaContext.Provider value={{ idioma, alternar, t: conteudo[idioma], pessoal: conteudo.pessoal }}>
      {children}
    </IdiomaContext.Provider>
  )
}

export function useIdioma() {
  return useContext(IdiomaContext)
}
