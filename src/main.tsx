import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='font-inter'>
      <App />
    </div>
  </StrictMode>,
)
