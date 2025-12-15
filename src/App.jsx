import HomePage from './Pages/Home'
import './App.css'
import Layout from './Components/Layout'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import GeoZone from './Pages/CosaFacciamo/GeoZone'
import ChiSiamo from './Pages/ChiSiamo'
import EconomicZone from './Pages/CosaFacciamo/EconomicZone'
import PsyZone from './Pages/CosaFacciamo/PsyZone'
import Projects from './Pages/CosaFacciamo/Projects'
import AnthropologicZone from './Pages/CosaFacciamo/AnthropologicZone'
import SportelloPage from './Pages/Sportello'
import StorieDiClima from './Pages/StorieDiClima'
import RisorseBiblioteca from './Pages/Risorse'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/cosa-facciamo/geo-zone" element={<GeoZone />} />
          <Route path="/cosa-facciamo/anthropological-zone" element={<AnthropologicZone />} />
          <Route path="/cosa-facciamo/economic-zone" element={<EconomicZone />} />
          <Route path="/cosa-facciamo/psy-zone" element={<PsyZone />} />
          <Route path="/cosa-facciamo/progetti" element={<Projects />} />
          <Route path="/sportello-psicologico" element={<SportelloPage />} />
          <Route path="/storie-di-clima" element={<StorieDiClima />} />
          <Route path="/risorse" element={<RisorseBiblioteca />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App