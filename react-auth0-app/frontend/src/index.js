import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './app';
import {BrowserRouter as Router} from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

import './index.css';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>
);
