import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import { useState } from 'react';
import GlobalStyles from './components/styles/Global';
import { Routes, Route } from 'react-router-dom';

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
  const [darkMode] = useState(false);
  let theme = lightTheme;

  if (darkMode)
    theme = darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<h1>HOME</h1>} />
          <Route path='/store' element={<h1>STORE</h1>} />
          <Route path='/about' element={<h1>ABOUT</h1>} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </Container>
    </ThemeProvider>
  )
}

export default App
