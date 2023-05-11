import React, { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import { AuthContextProvider } from '../context/authContext';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css'
import '../styles/style.scss'
import "react-toastify/dist/ReactToastify.css";
import { ChatContextProvider } from '../context/chatContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../server/common/db';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
        <Head>
            <title>Chatbot</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content="Chatbot" />
            <meta
              property="og:description"
              content="Chatbot"
            />
        </Head>
        <AuthContextProvider>
          <ChatContextProvider>
            <Component {...pageProps} />
          </ChatContextProvider>
        </AuthContextProvider>
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          closeOnClick
          pauseOnHover
        />
     </div>
  )
}