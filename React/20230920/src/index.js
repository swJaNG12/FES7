import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import App2 from './App2';
// import App3 from './App3';
// import App4 from './App4';
import {DarkMode} from './DarkMode';
import ClassLifeCycle from './ClassLifeCycle';
import Wrap from './HookLifrCycle';
import LayoutEffect from './LayoutEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LayoutEffect />
);
