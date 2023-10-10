import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Helmet } from 'react-helmet';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-uxwwufmsugasju6o.us.auth0.com"
    clientId="CyuoQZbm2lsnn6sA5KQ2wrxqLc3ypOTr"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>
    <App />
    </BrowserRouter>
    <Helmet>
      <script src="https://unpkg.com/swiper/swiper-bundle.min.js" type="text/javascript"/>
    </Helmet>
    </Auth0Provider>
  </React.StrictMode>
);

