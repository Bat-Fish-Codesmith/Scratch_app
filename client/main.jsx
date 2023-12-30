/*** React 18 imports***/
import React from 'react';
import { createRoot } from 'react-dom/client';

/*** React Routing***/
import App from './App.jsx';

/*** Styling {TBD} ***/
import './index.css';

/*** React 18 root render {Router} ***/
const root = createRoot(document.getElementById('root'));
root.render(<App />);