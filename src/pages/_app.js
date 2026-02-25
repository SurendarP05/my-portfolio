import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Surendar | Portfolio</title>
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp