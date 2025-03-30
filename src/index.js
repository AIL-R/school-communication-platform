import React from 'react';
import ReactDOM from 'react-dom/client'; // 注意这里是 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 使用 React 18 的 createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
