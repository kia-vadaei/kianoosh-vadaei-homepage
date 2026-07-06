import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import LatestUpdates from './components/LatestUpdates'
import Publications from './components/Publications'
import Skills from './components/Skills'
import Experience from './components/Experience'
import CV from './components/CV'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import FloatingMathLayer from './components/FloatingMathLayer'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <ScrollProgress />
      <FloatingMathLayer />
      <Header />

      <main id="main">
        <Hero />
        <About />
        <LatestUpdates />
        <Publications />
        <Skills />
        <Experience />
        <CV />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}

export default App
