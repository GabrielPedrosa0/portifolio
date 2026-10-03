const cena = [
  '............................ooo.',
  '............................o.o.',
  'ffffffffffffffffff.....+....ooo.',
  'fssssssssssssssssF....+++.......',
  'fsccsscccccccssssF.....+........',
  'fsccsssssssssssssF..............',
  'fssssssssssssssssF...........+..',
  'fsllssllllllllsssF..............',
  'fsllsssssssssssssF...bbbbttbbbb.',
  'fssssssssssssssssF...BBBBttBBBB.',
  'fsllsslllllllssssF...bbbbttbbbb.',
  'fsllsssssssssssssF...bbbbbbbbbb.',
  'fssssssssssssssssF...bbeeeeebbb.',
  'FFFFFFFFFFFFFFFFFF...bbeeeeebbb.',
  '.......ffff..........bbbbbbbbbb.',
  '.....ffffffff......o.BBBBBBBBBB.',
]

const cores = {
  f: '#6f5fb3',
  F: '#4f437f',
  s: '#1a1b24',
  c: '#a99cdb',
  l: '#4a4560',
  b: '#9c93b1',
  B: '#6c6082',
  t: '#eeecf5',
  e: '#d9d5e6',
  '+': '#a99cdb',
  o: '#6f5fb3',
}

function blocos(linhas) {
  const lista = []
  linhas.forEach((linha, y) => {
    let x = 0
    while (x < linha.length) {
      const cor = linha[x]
      if (cor === '.') {
        x += 1
        continue
      }
      let fim = x
      while (fim < linha.length && linha[fim] === cor) fim += 1
      lista.push({ x, y, w: fim - x, cor })
      x = fim
    }
  })
  return lista
}

const retangulos = blocos(cena)

export default function PixelArt({ titulo, className = '' }) {
  const largura = cena[0].length
  const altura = cena.length
  return (
    <svg
      viewBox={`0 0 ${largura} ${altura}`}
      role="img"
      aria-label={titulo}
      shapeRendering="crispEdges"
      className={className}
    >
      {retangulos.map((r) => (
        <rect key={`${r.x}-${r.y}`} x={r.x} y={r.y} width={r.w} height={1} fill={cores[r.cor]} />
      ))}
    </svg>
  )
}
