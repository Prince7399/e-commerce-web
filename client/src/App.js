import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components'
import THEME from './Css/theme';
import GlobalStyle from './Css/commonStyle';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import WishList from './pages/WishList';
import Cart from './pages/Cart';
import CheckOut from './pages/Checkout';
import Contact from './pages/Contact';

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to={'/home'} replace />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<CheckOut />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App;

