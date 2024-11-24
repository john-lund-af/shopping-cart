import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import ShoppingCartContextProvider from './context/ShoppingCartContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShoppingCartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShoppingCartContextProvider>
  </StrictMode>,
)
