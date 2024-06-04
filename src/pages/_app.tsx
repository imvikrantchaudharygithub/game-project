import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/store';
import toast, { Toaster } from 'react-hot-toast';


export default function App({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Layout>
    <Toaster/>
      <Component {...pageProps} />
    </Layout>
    </PersistGate>
    </Provider>
  ) 
}
