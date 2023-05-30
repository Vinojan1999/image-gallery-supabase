import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient("https://ffrkcwvnegfaicnexliq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmcmtjd3ZuZWdmYWljbmV4bGlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0NTIwMjgsImV4cCI6MjAwMTAyODAyOH0.w5gnVeg2AquYJJfQqLgBNsW90MQhGp2DUSybqLf1V9Y")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);

