import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css'
import "react-toastify/dist/ReactToastify.css";

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
      <div>
        <Component {...pageProps} />
      </div>
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