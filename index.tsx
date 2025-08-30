import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductProvider } from './context/ProductContext';
import { ClientProvider } from './context/ClientContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ProductProvider>
      <ClientProvider>
        <App />
      </ClientProvider>
    </ProductProvider>
  </React.StrictMode>
);