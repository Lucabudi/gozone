import HomePage from './Pages/Home'
import './App.css'
import Layout from './Components/Layout'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import ChiSiamo from './Pages/ChiSiamo'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App