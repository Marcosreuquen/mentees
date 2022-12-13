import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
return (
    <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"/>
            <title>Mentees</title>
            <link rel="shortcut icon" href="/logo-mentees.ico.png" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
)
}