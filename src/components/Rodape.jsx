import { useIdioma } from '../i18n.jsx'

export default function Rodape() {
  const { t, pessoal } = useIdioma()
  return (
    <footer className="border-t border-linha">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-[14px] text-apagado sm:flex-row">
        <p>
          © {new Date().getFullYear()} {pessoal.nome}. {t.rodape.texto}
        </p>
        <a href="#inicio" className="transition-colors hover:text-white">
          {t.rodape.topo}
        </a>
      </div>
    </footer>
  )
}
