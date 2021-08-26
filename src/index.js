import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

const Application = () => (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
    hydrate(<Application />, rootElement);
} else {
    render(<Application />, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
