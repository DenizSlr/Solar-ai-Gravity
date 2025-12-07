import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Cases from './pages/Cases'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diensten" element={<Services />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/over-ons" element={<About />} />
        <Route path="/werken-bij" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/voorwaarden" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Layout>
  )
}

export default App
