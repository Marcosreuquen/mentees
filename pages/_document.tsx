import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <link rel='shortcut icon' href='/logo-mentees.ico.png' />
        <meta
          name='description'
          content='Únite a la comunidad de Mentees y encuentra mentores para ayudarte en tus proyectos. También puedes convertirte en mentor y compartir tus conocimientos con otros. ¡Regístrate hoy y forma parte de nuestra comunidad!'
        />
        <meta name='twitter:card' content='summary'></meta>

        <meta
          property='og:title'
          content='Mentees - Comunidad de mentores y mentees para compartir conocimientos'
        />
        <meta property='og:type' content='article' />
        <meta property='og:url' content=' https://mentees-five.vercel.app' />
        <meta property='og:image' content=' /social.jpeg' />
        <meta
          property='og:description'
          content='Únite a la comunidad de Mentees y encuentra mentores para ayudarte en tus proyectos. También puedes convertirte en mentor y compartir tus conocimientos con otros. ¡Regístrate hoy y forma parte de nuestra comunidad!'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          src='https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js'
          crossOrigin='crossOrigin'
        ></script>

        <script
          src='https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js'
          crossOrigin='crossOrigin'
        ></script>

        <script
          src='https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js'
          crossOrigin='crossOrigin'
        ></script>
      </body>
    </Html>
  );
}
