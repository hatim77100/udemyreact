import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function Hello() {
  return <h1>Hello world !</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Hello/>
);


