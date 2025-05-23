import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VerifySesion from './pages/VerifySesion.jsx'

import Home from './pages/Home'
import Businesses from './pages/Businesses.jsx'
import Restaurante from './pages/Restaurante';
import Layout from './pages/Layout'
import Cart from './pages/Cart.jsx'
import Perfil from './pages/Perfil.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'


const App = () => {
  return (
    <Router>
        <Layout>
          <Routes>
            <Route path='/' element={ <Home/> }></Route>
            <Route path="/restaurantes" element={<Businesses />} />
            <Route path="/restaurante/:id" element={<Restaurante />} />
            <Route path='/restaurant/:id/cart' element={<Cart />}></Route>
            <Route path="/perfil" element={<VerifySesion><Perfil /></VerifySesion>} />
            <Route path="/auth/signIn" element={<LoginPage />} />
            <Route path="/auth/signUp" element={<RegisterPage />} />
            <Route path="/restaurante/:id" element={<Restaurante />} />
          </Routes>
        </Layout>
      </Router>
  )
}

export default App
