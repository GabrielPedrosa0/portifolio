import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useIdioma } from '../i18n.jsx'

const secoes = ['inicio', 'sobre', 'servicos', 'projetos', 'contato']

function useSecaoAtiva() {
  const [ativa, setAtiva] = useState('inicio')
  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) setAtiva(entrada.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    secoes.forEach((id) => {
      const elemento = document.getElementById(id)
      if (elemento) observador.observe(elemento)
    })
    return () => observador.disconnect()
  }, [])
  return ativa
}

export default function Navbar() {
  const { t, idioma, alternar } = useIdioma()
  const [rolou, setRolou] = useState(false)
  const [aberto, setAberto] = useState(false)
  const ativa = useSecaoAtiva()

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  useEffect(() => {
    if (!aberto) return
    const aoTeclar = (evento) => evento.key === 'Escape' && setAberto(false)
    window.addEventListener('keydown', aoTeclar)
    return () => window.removeEventListener('keydown', aoTeclar)
  }, [aberto])

  const fundo = rolou || aberto ? 'bg-noite border-linha' : 'bg-transparent border-transparent'

  const BotaoIdioma = (
    <button
      type="button"
      onClick={alternar}
      aria-label={t.nav.trocarIdioma}
      className="inline-flex h-9 items-center rounded-full border border-linha px-1 text-[13px] font-medium"
    >
      {['pt', 'en'].map((codigo) => (
        <span
          key={codigo}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            idioma === codigo ? 'bg-roxo text-white' : 'text-apagado'
          }`}
        >
          {codigo.toUpperCase()}
        </span>
      ))}
    </button>
  )

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-200 ${fundo}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#inicio" className="font-titulo text-[1.6rem] font-semibold italic text-lavanda">
          gabriel
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-7 md:flex">
            {secoes.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={ativa === id ? 'true' : undefined}
                  className={`relative py-1 text-[15px] transition-colors ${
                    ativa === id ? 'text-lavanda' : 'text-nevoa hover:text-white'
                  }`}
                >
                  {t.nav[id]}
                  {ativa === id && <span className="absolute inset-x-0 -bottom-0.5 h-px bg-lavanda" />}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">{BotaoIdioma}</div>
          <button
            type="button"
            onClick={() => setAberto((valor) => !valor)}
            aria-expanded={aberto}
            aria-controls="menu-movel"
            aria-label={aberto ? t.nav.fecharMenu : t.nav.abrirMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-linha text-nevoa md:hidden"
          >
            {aberto ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {aberto && (
        <div id="menu-movel" className="border-t border-linha bg-noite px-6 pb-6 md:hidden">
          <ul className="flex flex-col py-2">
            {secoes.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setAberto(false)}
                  className={`block border-b border-linha py-3.5 text-base ${
                    ativa === id ? 'text-lavanda' : 'text-nevoa'
                  }`}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">{BotaoIdioma}</div>
        </div>
      )}
    </header>
  )
}
