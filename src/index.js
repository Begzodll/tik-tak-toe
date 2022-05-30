import React, {StrictMode} from "react";
import reactDOM from 'react-dom';
import {createRoot} from "react-dom/client";
import App from './App';
import './assets/index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)