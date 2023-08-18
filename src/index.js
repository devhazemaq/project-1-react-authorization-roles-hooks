import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import ThemeProvider  from './context/ThemeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          {/* <Suspense fallback={<h1>app loading....</h1>}> */}
            <App />
          {/* </Suspense> */}
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

