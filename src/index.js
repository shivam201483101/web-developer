import React from 'react';
import ReactDOM from 'react-dom/client';
import { TerminalContextProvider } from 'react-terminal';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TerminalContextProvider>
    <App />
  </TerminalContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
