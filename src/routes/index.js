import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HeaderMob } from '../components/HeaderMob'
import { Home } from '../pages/Home'
import ProductPage from '../pages/ProductPage'

function AppRoutes() {
  return (
    <BrowserRouter>
      {window.screen.width > 768 ? <Header /> : <HeaderMob />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
