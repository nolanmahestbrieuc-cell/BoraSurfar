import TopBar from './components/TopBar'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import MenuPreview from './components/MenuPreview'
import Footer from './components/Footer'

export default function MaisonAurele() {
  return (
    <div className="aurele-page min-h-screen bg-aurele-ink antialiased">
      <TopBar />
      <main>
        <Hero />
        <Manifesto />
        <MenuPreview />
      </main>
      <Footer />
    </div>
  )
}
