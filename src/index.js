import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from "@react-oauth/google";

const GOOGLE_CLIENT_ID = "800801519585-qmph1r52j24jc6vav2vvctbbqbe9iini.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
       <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);


reportWebVitals();
