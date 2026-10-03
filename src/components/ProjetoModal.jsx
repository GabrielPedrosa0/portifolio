import { useEffect, useRef } from 'react'
import { Check, ExternalLink, X } from 'lucide-react'
import { useIdioma } from '../i18n.jsx'
import { IconeGitHub } from './Icones.jsx'
import { botaoPrimario, botaoSecundario, chip } from './estilos.js'

const focaveis = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function ProjetoModal({ projeto, aoFechar }) {
  const { t } = useIdioma()
  const painel = useRef(null)
  const botaoFechar = useRef(null)

  useEffect(() => {
    const anterior = document.activeElement
    const overflowAnterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    botaoFechar.current?.focus()

    const aoTeclar = (evento) => {
      if (evento.key === 'Escape') {
        aoFechar()
        return
      }
      if (evento.key !== 'Tab' || !painel.current) return
      const lista = [...painel.current.querySelectorAll(focaveis)]
      if (lista.length === 0) return
      const primeiro = lista[0]
      const ultimo = lista[lista.length - 1]
      if (evento.shiftKey && document.activeElement === primeiro) {
        evento.preventDefault()
        ultimo.focus()
      } else if (!evento.shiftKey && document.activeElement === ultimo) {
        evento.preventDefault()
        primeiro.focus()
      }
    }

    window.addEventListener('keydown', aoTeclar)
    return () => {
      window.removeEventListener('keydown', aoTeclar)
      document.body.style.overflow = overflowAnterior
      anterior?.focus?.()
    }
  }, [aoFechar])

  const idTitulo = `titulo-${projeto.id}`

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 sm:items-center sm:p-6"
      onMouseDown={(evento) => evento.target === evento.currentTarget && aoFechar()}
    >
      <div
        ref={painel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={idTitulo}
        className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-linha bg-painel sm:rounded-2xl"
      >
        <div className="flex items-start justify-between gap-6 border-b border-linha p-6 sm:p-8">
          <div>
            <p className="inline-flex items-center gap-2 text-[13px] text-apagado">
              <span className="h-1.5 w-1.5 rounded-full bg-lavanda" aria-hidden="true" />
              {t.projetos.emProducao}
            </p>
            <h3 id={idTitulo} className="mt-2 font-titulo text-[2rem] font-semibold leading-tight text-white">
              {projeto.nome}
            </h3>
            <p className="mt-1 text-lavanda">{projeto.titulo}</p>
          </div>
          <button
            ref={botaoFechar}
            type="button"
            onClick={aoFechar}
            aria-label={t.projetos.fechar}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-linha text-nevoa transition-colors hover:border-roxo hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <p className="leading-relaxed text-nevoa">{projeto.resumo}</p>

          <h4 className="mt-8 text-[15px] font-semibold text-white">{t.projetos.tituloFatos}</h4>
          <ul className="mt-4 space-y-3">
            {projeto.fatos.map((fato) => (
              <li key={fato} className="flex gap-3 leading-relaxed text-nevoa">
                <Check size={18} className="mt-1 shrink-0 text-lavanda" aria-hidden="true" />
                <span>{fato}</span>
              </li>
            ))}
          </ul>

          <h4 className="mt-8 text-[15px] font-semibold text-white">{t.projetos.tituloStack}</h4>
          <ul className="mt-4 flex flex-wrap gap-2">
            {projeto.stack.map((item) => (
              <li key={item} className={chip}>
                {item}
              </li>
            ))}
          </ul>

          {(projeto.links.demo || projeto.links.codigo) && (
            <div className="mt-9 flex flex-wrap gap-3">
              {projeto.links.demo && (
                <a href={projeto.links.demo} target="_blank" rel="noreferrer" className={botaoPrimario}>
                  <ExternalLink size={17} aria-hidden="true" />
                  {t.projetos.demo}
                </a>
              )}
              {projeto.links.codigo && (
                <a href={projeto.links.codigo} target="_blank" rel="noreferrer" className={botaoSecundario}>
                  <IconeGitHub size={17} />
                  {t.projetos.codigo}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
