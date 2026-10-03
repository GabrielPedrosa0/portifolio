import { useIdioma } from '../i18n.jsx'
import { iconesServico } from './Icones.jsx'
import { tituloSecao } from './estilos.js'

export default function Servicos() {
  const { t } = useIdioma()
  return (
    <section id="servicos" className="bg-gelo text-ameixa">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`${tituloSecao} text-ameixa`}>{t.servicos.titulo}</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-malva">{t.servicos.subtitulo}</p>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.servicos.itens.map((item) => {
            const Icone = iconesServico[item.icone]
            return (
              <li key={item.titulo} className="rounded-xl border border-[#dedaea] bg-white px-7 py-9 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gelo text-malva">
                  <Icone size={22} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-titulo text-[1.3rem] font-semibold text-ameixa">{item.titulo}</h3>
                <p className="mx-auto mt-3 max-w-[18rem] text-[15px] leading-relaxed text-malva">{item.texto}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
