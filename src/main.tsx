// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import { Amplify } from 'aws-amplify'; // Named import
// import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import './index.css'; // Ensure this path is correct

Amplify.configure({});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
