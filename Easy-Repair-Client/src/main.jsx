import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/routes';
import AuthProvider from './Providers/AuthProvider';

createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>,
  </div>
)
