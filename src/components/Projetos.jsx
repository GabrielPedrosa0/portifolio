import { useCallback, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { useIdioma } from '../i18n.jsx'
import ImagemProjeto from './ImagemProjeto.jsx'
import ProjetoModal from './ProjetoModal.jsx'
import { IconeGitHub } from './Icones.jsx'
import { botaoIcone, chip, tituloSecao } from './estilos.js'

export default function Projetos() {
  const { t } = useIdioma()
  const [aberto, setAberto] = useState(null)
  const fechar = useCallback(() => setAberto(null), [])
  const projetoAberto = t.projetos.itens.find((projeto) => projeto.id === aberto)

  return (
    <section id="projetos" className="border-b border-linha">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`${tituloSecao} text-white`}>{t.projetos.titulo}</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-nevoa">{t.projetos.subtitulo}</p>
        </div>

        <ul className="mt-14 grid gap-7 md:grid-cols-2">
          {t.projetos.itens.map((projeto) => (
            <li
              key={projeto.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-linha bg-painel transition-colors hover:border-roxo/70"
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-linha">
                <ImagemProjeto projeto={projeto} alt={`${t.projetos.altImagem} ${projeto.nome}`} />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-titulo text-[1.75rem] font-semibold leading-none text-white">{projeto.nome}</h3>
                  <span className="inline-flex items-center gap-2 rounded-full border border-linha px-3 py-1 text-[12px] text-nevoa">
                    <span className="h-1.5 w-1.5 rounded-full bg-lavanda" aria-hidden="true" />
                    {t.projetos.emProducao}
                  </span>
                </div>
                <p className="mt-3 font-medium text-lavanda">{projeto.titulo}</p>
                <p className="mt-3 leading-relaxed text-nevoa">{projeto.resumo}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {projeto.stack.map((item) => (
                    <li key={item} className={chip}>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center gap-3 pt-7">
                  <button
                    type="button"
                    onClick={() => setAberto(projeto.id)}
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-roxo px-6 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-roxo-escuro sm:flex-none"
                  >
                    {t.projetos.verDetalhes}
                  </button>
                  {projeto.links.codigo && (
                    <a
                      href={projeto.links.codigo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${t.projetos.codigo}: ${projeto.nome}`}
                      className={botaoIcone}
                    >
                      <IconeGitHub size={17} />
                    </a>
                  )}
                  {projeto.links.demo && (
                    <a
                      href={projeto.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${t.projetos.demo}: ${projeto.nome}`}
                      className={botaoIcone}
                    >
                      <ExternalLink size={17} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {projetoAberto && <ProjetoModal projeto={projetoAberto} aoFechar={fechar} />}
    </section>
  )
}
