import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <body style={{ backgroundColor: '#10141f', color: '#e2e8f0' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}