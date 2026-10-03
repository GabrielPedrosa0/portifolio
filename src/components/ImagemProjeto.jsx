import { useState } from 'react'

function Barra({ className = '' }) {
  return <span className={`block h-2 rounded-full ${className}`} />
}

function TelaChamados() {
  const linhas = [
    { status: 'bg-lavanda', largura: 'w-3/5', etiqueta: 'bg-roxo/60' },
    { status: 'bg-lilas', largura: 'w-2/5', etiqueta: 'bg-malva/70' },
    { status: 'bg-lavanda', largura: 'w-1/2', etiqueta: 'bg-roxo/60' },
    { status: 'bg-malva', largura: 'w-2/3', etiqueta: 'bg-linha' },
    { status: 'bg-lilas', largura: 'w-1/3', etiqueta: 'bg-malva/70' },
  ]
  return (
    <div className="flex flex-1 flex-col gap-2.5 p-4 sm:p-5">
      <div className="mb-1 flex items-center justify-between">
        <Barra className="w-24 bg-nevoa/40" />
        <span className="h-5 w-16 rounded-full bg-roxo" />
      </div>
      {linhas.map((linha, posicao) => (
        <div key={posicao} className="flex items-center gap-3 rounded-md border border-linha bg-noite px-3 py-2.5">
          <span className={`h-2 w-2 shrink-0 rounded-full ${linha.status}`} />
          <Barra className={`${linha.largura} bg-linha`} />
          <span className={`ml-auto h-3.5 w-12 shrink-0 rounded-full ${linha.etiqueta}`} />
        </div>
      ))}
    </div>
  )
}

function TelaEstoque() {
  const saldos = ['w-4/5', 'w-1/3', 'w-3/5', 'w-1/5', 'w-2/3']
  return (
    <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
      <div className="grid grid-cols-3 gap-2.5">
        {['bg-roxo/70', 'bg-malva/70', 'bg-lilas/60'].map((cor) => (
          <div key={cor} className="rounded-md border border-linha bg-noite p-2.5">
            <Barra className="w-2/3 bg-linha" />
            <span className={`mt-2 block h-4 w-1/2 rounded ${cor}`} />
          </div>
        ))}
      </div>
      <div className="flex-1 rounded-md border border-linha bg-noite">
        {saldos.map((largura, posicao) => (
          <div key={posicao} className="flex items-center gap-3 border-b border-linha px-3 py-2 last:border-b-0">
            <span className="h-3 w-3 shrink-0 rounded-sm bg-lilas/70" />
            <Barra className="w-1/3 bg-linha" />
            <div className="ml-auto h-2 w-20 rounded-full bg-linha">
              <span className={`block h-2 rounded-full bg-lavanda/70 ${largura}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TelaIlustrada({ tipo }) {
  return (
    <div aria-hidden="true" className="flex h-full flex-col bg-[#1a1b24]">
      <div className="flex items-center gap-1.5 border-b border-linha px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-linha" />
        <span className="h-2.5 w-2.5 rounded-full bg-linha" />
        <span className="h-2.5 w-2.5 rounded-full bg-linha" />
        <span className="ml-3 h-2 w-32 rounded-full bg-linha" />
      </div>
      <div className="flex flex-1">
        <div className="hidden w-1/5 flex-col gap-2.5 border-r border-linha p-4 sm:flex">
          <span className="mb-2 h-5 w-5 rounded bg-roxo" />
          <Barra className="w-full bg-roxo/50" />
          <Barra className="w-4/5 bg-linha" />
          <Barra className="w-full bg-linha" />
          <Barra className="w-3/5 bg-linha" />
        </div>
        {tipo === 'sigch' ? <TelaChamados /> : <TelaEstoque />}
      </div>
    </div>
  )
}

export default function ImagemProjeto({ projeto, alt }) {
  const [falhou, setFalhou] = useState(!projeto.imagem)
  if (falhou) return <TelaIlustrada tipo={projeto.id} />
  return (
    <img
      src={projeto.imagem}
      alt={alt}
      loading="lazy"
      onError={() => setFalhou(true)}
      className="h-full w-full object-cover object-top"
    />
  )
}
