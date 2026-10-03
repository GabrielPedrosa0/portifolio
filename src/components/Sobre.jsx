import { useState } from 'react'
import { Download } from 'lucide-react'
import { useIdioma } from '../i18n.jsx'
import PixelArt from './PixelArt.jsx'
import { iconesTrajetoria } from './Icones.jsx'
import { botaoPrimario, botaoSecundario, chip, tituloSecao } from './estilos.js'

function Retrato() {
  const { t, pessoal } = useIdioma()
  const [fotoFalhou, setFotoFalhou] = useState(!pessoal.foto)

  return (
    <div className="relative mx-auto w-full max-w-[26rem] lg:mx-0 lg:ml-auto">
      <div
        aria-hidden="true"
        className="absolute -bottom-5 -left-5 h-2/3 w-2/3"
        style={{
          backgroundImage: 'radial-gradient(#4f437f 1.2px, transparent 1.6px)',
          backgroundSize: '12px 12px',
        }}
      />
      <div className="relative overflow-hidden rounded-2xl border border-linha bg-noite">
        {fotoFalhou ? (
          <div className="flex aspect-[5/4] items-center justify-center p-10">
            <PixelArt titulo={t.sobre.altArte} className="w-full" />
          </div>
        ) : (
          <img
            src={pessoal.foto}
            alt={t.sobre.altFoto}
            onError={() => setFotoFalhou(true)}
            className="aspect-[5/4] w-full object-cover"
          />
        )}
      </div>
    </div>
  )
}

function Tecnologias() {
  const { t } = useIdioma()
  return (
    <div className="mt-24">
      <h3 className="font-titulo text-[1.75rem] font-semibold text-white">{t.tecnologias.titulo}</h3>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {t.tecnologias.grupos.map((grupo) => (
          <div key={grupo.nome} className="rounded-xl border border-linha bg-cartao p-6">
            <h4 className="text-[15px] font-semibold text-white">{grupo.nome}</h4>
            <ul className="mt-4 flex flex-wrap gap-2">
              {grupo.itens.map((item) => (
                <li key={item} className={chip}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

function Trajetoria() {
  const { t } = useIdioma()
  const itens = t.trajetoria.itens
  return (
    <div className="mt-24">
      <h3 className="font-titulo text-[1.75rem] font-semibold text-white">{t.trajetoria.titulo}</h3>
      <ol className="mt-8 max-w-4xl">
        {itens.map((item, posicao) => {
          const Icone = iconesTrajetoria[item.icone]
          const ultimo = posicao === itens.length - 1
          return (
            <li key={item.cargo} className="relative grid grid-cols-[2.75rem_1fr] gap-4 sm:gap-6">
              <div className="relative flex justify-center">
                <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-roxo text-white">
                  <Icone size={19} aria-hidden="true" />
                </span>
                {!ultimo && <span aria-hidden="true" className="absolute bottom-0 top-11 w-px bg-linha" />}
              </div>
              <div className={ultimo ? '' : 'pb-6'}>
                <div className="rounded-xl border border-linha bg-cartao p-5 sm:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h4 className="text-[17px] font-semibold text-white">{item.cargo}</h4>
                    {item.periodo && <p className="shrink-0 text-[13px] text-apagado">{item.periodo}</p>}
                  </div>
                  <p className="mt-1 text-[14px] text-lavanda">{item.local}</p>
                  {item.texto && <p className="mt-3 leading-relaxed text-nevoa">{item.texto}</p>}
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default function Sobre() {
  const { t, pessoal } = useIdioma()
  return (
    <section id="sobre" className="border-b border-linha bg-painel">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className={`${tituloSecao} text-white`}>{t.sobre.titulo}</h2>
            <p className="mt-3 text-[15px] text-lavanda">{t.sobre.subtitulo}</p>
            <div className="mt-7 max-w-[38rem] space-y-4 text-[16px] leading-[1.7] text-nevoa">
              {t.sobre.paragrafos.map((paragrafo) => (
                <p key={paragrafo.slice(0, 24)}>{paragrafo}</p>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={t.sobre.arquivoCurriculo ?? pessoal.curriculo} download className={botaoPrimario}>
                <Download size={17} aria-hidden="true" />
                {t.sobre.botaoCurriculo}
              </a>
              <a href="#contato" className={botaoSecundario}>
                {t.sobre.botaoContato}
              </a>
            </div>
          </div>
          <Retrato />
        </div>

        <Tecnologias />
        <Trajetoria />
      </div>
    </section>
  )
}
