import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { getFirestoreApp } from './config/getFirestoreApp';
import './index.css';

getFirestoreApp();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
