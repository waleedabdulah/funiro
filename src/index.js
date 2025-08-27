import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './styles.scss'
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import { UIAdjustmentProvider } from './context/ui-adjustment-context/UIAdjustmentContext';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store , persistor } from './redux/store'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <UIAdjustmentProvider>
        <BrowserRouter>
          <React.StrictMode>
            <Header />
            <App />
            <Footer />
          </React.StrictMode>
        </BrowserRouter>
      </UIAdjustmentProvider>
    </PersistGate>
  </Provider>
);
