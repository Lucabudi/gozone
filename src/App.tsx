import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import HomePage from './Pages/Home';
import ChiSiamo from './Pages/ChiSiamo';
import GeoZone from './Pages/CosaFacciamo/GeoZone';
import PsyZone from './Pages/CosaFacciamo/PsyZone';
import AnthropologicZone from './Pages/CosaFacciamo/AnthropologicZone';
import EconomicZone from './Pages/CosaFacciamo/EconomicZone';
import Projects from './Pages/CosaFacciamo/Projects';
import SportelloPage from './Pages/Sportello';
import StorieDiClima from './Pages/StorieDiClima';
import RisorseBiblioteca from './Pages/Risorse';
import NotFound from './Pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/cosa-facciamo/geo-zone" element={<GeoZone />} />
          <Route path="/cosa-facciamo/psy-zone" element={<PsyZone />} />
          <Route path="/cosa-facciamo/anthro-zone" element={<AnthropologicZone />} />
          <Route path="/cosa-facciamo/circular-zone" element={<EconomicZone />} />
          <Route path="/cosa-facciamo/progetti" element={<Projects />} />
          <Route path="/sportello-psicologico" element={<SportelloPage />} />
          <Route path="/storie-di-clima" element={<StorieDiClima />} />
          <Route path="/risorse" element={<RisorseBiblioteca />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
