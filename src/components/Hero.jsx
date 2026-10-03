import { useEffect, useState } from 'react'
import { useIdioma } from '../i18n.jsx'
import Redes from './Redes.jsx'
import { botaoPrimario, botaoSecundario } from './estilos.js'

function useMovimentoReduzido() {
  const [reduzido, setReduzido] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const consulta = window.matchMedia('(prefers-reduced-motion: reduce)')
    const aoMudar = () => setReduzido(consulta.matches)
    consulta.addEventListener('change', aoMudar)
    return () => consulta.removeEventListener('change', aoMudar)
  }, [])
  return reduzido
}

function useDigitacao(frases, parado) {
  const [texto, setTexto] = useState('')
  const [indice, setIndice] = useState(0)
  const [apagando, setApagando] = useState(false)

  useEffect(() => {
    setTexto('')
    setIndice(0)
    setApagando(false)
  }, [frases])

  useEffect(() => {
    if (parado) return
    const frase = frases[indice % frases.length]
    if (frases.length === 1 && !apagando && texto === frase) return
    let espera = apagando ? 28 : 60
    if (!apagando && texto === frase) espera = 2200
    if (apagando && texto === '') espera = 350

    const timer = setTimeout(() => {
      if (!apagando && texto === frase) {
        setApagando(true)
      } else if (apagando && texto === '') {
        setApagando(false)
        setIndice((valor) => (valor + 1) % frases.length)
      } else {
        setTexto(apagando ? frase.slice(0, texto.length - 1) : frase.slice(0, texto.length + 1))
      }
    }, espera)
    return () => clearTimeout(timer)
  }, [texto, apagando, indice, frases, parado])

  return parado ? frases[0] : texto
}

export default function Hero() {
  const { t, pessoal } = useIdioma()
  const reduzido = useMovimentoReduzido()
  const digitado = useDigitacao(t.hero.funcoes, reduzido)

  return (
    <section id="inicio" className="relative overflow-hidden border-b border-linha">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(#2c2e3b 1px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-48"
        style={{ background: 'linear-gradient(to bottom, rgba(22,23,30,0), #16171e)' }}
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-3xl flex-col items-center justify-center px-6 pb-24 pt-32 text-center">
        <h1 className="font-titulo text-[3rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[4rem] md:text-[4.75rem]">
          {t.hero.saudacao} <span className="text-lavanda">{pessoal.nome}</span>
        </h1>

        <p className="mt-5 min-h-[2.4rem] font-titulo text-[1.5rem] italic text-nevoa sm:text-[1.9rem]">
          <span className="sr-only">{t.hero.funcoes.join('. ')}</span>
          <span aria-hidden="true">
            {digitado}
            <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.18em] bg-lavanda motion-safe:animate-piscar" />
          </span>
        </p>

        <p className="mt-6 max-w-[34rem] text-[17px] leading-relaxed text-nevoa">{t.hero.texto}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#projetos" className={botaoPrimario}>
            {t.hero.botaoProjetos}
          </a>
          <a href="#contato" className={botaoSecundario}>
            {t.hero.botaoContato}
          </a>
        </div>

        <Redes className="mt-10 justify-center" />
      </div>
    </section>
  )
}
