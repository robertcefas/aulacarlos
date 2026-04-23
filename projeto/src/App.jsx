import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FaleConosco from './pages/Falaconosco'
import Home from './pages/Home'
import SobreNos from './pages/Sobrenos'

function App() {

  return (
    <>
      <Header/>
      <main>
        {/* QUalquer página terar header e footer */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
