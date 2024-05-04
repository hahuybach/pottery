import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthProvider from './provider/AuthProvider.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="762978610620-sl0854e4l0u72geruu4mp4go0jmqsij7.apps.googleusercontent.com">
            <App />
        </GoogleOAuthProvider>
    </React.StrictMode>
);
