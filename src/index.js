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
import { QueryClient, QueryClientProvider, QueryCache } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// Create QueryClient with global error handling
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.warn("Global query error:", error);
    },
  }),
  defaultOptions: {
    queries: {
      retry: false, // avoid infinite retries for network errors
      refetchOnWindowFocus: false, // prevent refetch when switching tabs
    },
    mutations: {
      retry: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>        
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <UIAdjustmentProvider>
            <BrowserRouter>
                <Header />
                <App />
                <Footer />
            </BrowserRouter>
          </UIAdjustmentProvider>
        </PersistGate>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
