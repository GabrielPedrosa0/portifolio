import { Mail } from 'lucide-react'
import { useIdioma } from '../i18n.jsx'
import { IconeGitHub, IconeLinkedIn, IconeWhatsApp } from './Icones.jsx'
import { botaoIcone } from './estilos.js'

export default function Redes({ className = '' }) {
  const { pessoal } = useIdioma()
  const redes = [
    { nome: 'GitHub', url: pessoal.github, Icone: IconeGitHub },
    { nome: 'LinkedIn', url: pessoal.linkedin, Icone: IconeLinkedIn },
    { nome: 'E-mail', url: pessoal.email ? `mailto:${pessoal.email}` : '', Icone: Mail },
    { nome: 'WhatsApp', url: pessoal.whatsapp ? `https://wa.me/${pessoal.whatsapp.replace(/\D/g, '')}` : '', Icone: IconeWhatsApp },
  ].filter((rede) => rede.url)

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {redes.map(({ nome, url, Icone }) => (
        <li key={nome}>
          <a
            href={url}
            target={url.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            aria-label={nome}
            title={nome}
            className={botaoIcone}
          >
            <Icone size={18} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}
