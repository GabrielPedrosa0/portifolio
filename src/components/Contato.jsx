import { useState } from 'react'
import { Send } from 'lucide-react'
import { useIdioma } from '../i18n.jsx'
import Redes from './Redes.jsx'
import { tituloSecao } from './estilos.js'

const campo =
  'mt-2 w-full rounded-lg border border-roxo/50 bg-noite px-4 py-3 text-[15px] text-white placeholder-apagado transition-colors focus:border-lavanda focus:outline-none'

export default function Contato() {
  const { t, pessoal } = useIdioma()
  const [dados, setDados] = useState({ nome: '', email: '', mensagem: '' })
  const [erro, setErro] = useState(false)

  const atualizar = (evento) => {
    setDados((atual) => ({ ...atual, [evento.target.name]: evento.target.value }))
    setErro(false)
  }

  const enviar = (evento) => {
    evento.preventDefault()
    if (!dados.nome.trim() || !dados.email.trim() || !dados.mensagem.trim()) {
      setErro(true)
      return
    }
    const corpo = `${dados.mensagem.trim()}\n\n${dados.nome.trim()}\n${dados.email.trim()}`
    const url = `mailto:${pessoal.email}?subject=${encodeURIComponent(t.contato.assunto)}&body=${encodeURIComponent(corpo)}`
    window.location.href = url
  }

  return (
    <section id="contato" className="bg-painel">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <h2 className={`${tituloSecao} text-center text-white`}>{t.contato.titulo}</h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <form onSubmit={enviar} noValidate className="rounded-2xl border border-linha bg-noite p-6 sm:p-8">
            <h3 className="text-[17px] font-semibold text-white">{t.contato.tituloForm}</h3>

            <div className="mt-6 space-y-5">
              <label className="block text-[14px] text-nevoa">
                {t.contato.nome}
                <input
                  name="nome"
                  type="text"
                  autoComplete="name"
                  value={dados.nome}
                  onChange={atualizar}
                  className={campo}
                />
              </label>
              <label className="block text-[14px] text-nevoa">
                {t.contato.email}
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={dados.email}
                  onChange={atualizar}
                  className={campo}
                />
              </label>
              <label className="block text-[14px] text-nevoa">
                {t.contato.mensagem}
                <textarea
                  name="mensagem"
                  rows={5}
                  value={dados.mensagem}
                  onChange={atualizar}
                  className={`${campo} resize-y`}
                />
              </label>
            </div>

            {erro && (
              <p role="alert" className="mt-4 text-[14px] text-[#e3a6b4]">
                {t.contato.erro}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-roxo px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-roxo-escuro"
            >
              <Send size={16} aria-hidden="true" />
              {t.contato.enviar}
            </button>
            <p className="mt-3 text-center text-[13px] text-apagado">{t.contato.aviso}</p>
          </form>

          <div className="flex flex-col gap-6">
            <div className="flex-1 rounded-2xl border border-linha bg-noite p-6 sm:p-8">
              <p className="text-[16px] leading-relaxed text-nevoa">{t.contato.texto}</p>
              <ul className="mt-6 space-y-3">
                {t.contato.topicos.map((topico) => (
                  <li key={topico} className="flex items-center gap-3 text-[15px] text-white">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lavanda" aria-hidden="true" />
                    {topico}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-linha bg-noite p-6 sm:p-8">
              <h3 className="text-[15px] font-semibold text-white">{t.contato.tituloRedes}</h3>
              <Redes className="mt-4" />
              {pessoal.email && (
                <a
                  href={`mailto:${pessoal.email}`}
                  className="mt-5 inline-block break-all text-[15px] text-lavanda underline decoration-roxo/60 underline-offset-4 hover:decoration-lavanda"
                >
                  {pessoal.email}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
