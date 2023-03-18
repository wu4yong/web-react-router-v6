import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from "react-router-dom";
import AuthProvider from './store';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AuthProvider>
          <Router>
              <App />
          </Router>
      </AuthProvider>
  </React.StrictMode>
);
