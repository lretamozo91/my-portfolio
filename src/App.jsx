import './App.css';
import { Hero, SobreMi, Habilidades, Servicios, Experiencias, Contacto, Footer } from './components';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <SobreMi/>
      <Habilidades/>
      <Servicios />
      <Experiencias />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
