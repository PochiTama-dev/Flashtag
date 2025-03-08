import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { AppProvider } from './Context/AppContext.tsx';
import { AuthProvider } from './Context/LoginContext'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
          <AuthProvider> 
    <AppProvider>
      <App />
    </AppProvider>
    </AuthProvider>
  </StrictMode>,
);
