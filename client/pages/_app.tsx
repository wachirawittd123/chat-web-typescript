import React from 'react';
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css';
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}