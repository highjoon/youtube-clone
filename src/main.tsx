import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from '@/styles/globalStyles';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <App />
  </React.StrictMode>,
);
