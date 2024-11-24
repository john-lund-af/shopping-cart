import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import { useState } from 'react';
import GlobalStyles from './components/styles/Global';
import { Routes, Route } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import ShoppingCartContextProvider from './context/ShoppingCartContextProvider';

const darkTheme = {
  primary: '#121212',
  secondary: '#1e1e1e',
  text: '#e0e0e0'
}

const lightTheme = {
  primary: '#fff',
  secondary: '#F0F0F0',
  text: '#000'
}

function App() {
  const [showShoppingCart] = useState(false);
  const [darkMode] = useState(true);

  let theme = lightTheme;

  if (darkMode)
    theme = darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <ShoppingCartContextProvider>
        <GlobalStyles />
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<h1>Not Found</h1>} />
          </Routes>
        </Container>
        {showShoppingCart && <ShoppingCart />}
      </ShoppingCartContextProvider>
    </ThemeProvider>
  )
}

export default App
