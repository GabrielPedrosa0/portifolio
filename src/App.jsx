import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Servicos from './components/Servicos.jsx'
import Projetos from './components/Projetos.jsx'
import Contato from './components/Contato.jsx'
import Rodape from './components/Rodape.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Projetos />
        <Contato />
      </main>
      <Rodape />
    </>
  )
}
