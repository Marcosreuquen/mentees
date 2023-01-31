// import '../styles/globals.css'
import "styles/base.css";
import Head from 'next/head'
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mentees - Comunidad de mentores y mentees para compartir conocimientos</title>
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}
