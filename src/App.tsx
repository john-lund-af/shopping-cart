import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import { useContext } from 'react';
import GlobalStyles from './components/styles/Global';
import { Routes, Route } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import ShoppingCartContext from './context/ShoppingCartContext';

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
  const { isCartOpen } = useContext(ShoppingCartContext);
  const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  let theme = lightTheme;

  if (darkMode)
    theme = darkTheme;

  return (
    <ThemeProvider theme={theme}>
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
      {isCartOpen && <ShoppingCart />}
    </ThemeProvider>
  )
}

export default App
