import React from 'react';
import ReactDOM from 'react-dom/client';

import { Home } from './pages/Home';

import './styles/global-styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home numberToAdd={10}/>
  </React.StrictMode>
);

