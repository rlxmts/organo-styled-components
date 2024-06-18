import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  text-transform: none;
  list-style: none;
  box-sizing: border-box;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EstiloGlobal />
    <App />
  </React.StrictMode>
);


