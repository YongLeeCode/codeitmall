import Container from '@/components/Container';
import Header from '@/components/Header';
import Head from 'next/head'
import { ThemeProvider } from '@/lib/ThemeContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Watchit</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <ThemeProvider>
        <Header />
        <Container page>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
