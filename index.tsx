import React from 'react';
import ReactDOM from 'react-dom/client';
import './firebase'; // Import for side effects to ensure initialization order.
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { PointsProvider } from './contexts/PointsContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <PointsProvider>
        <App />
      </PointsProvider>
    </AuthProvider>
  </React.StrictMode>
);