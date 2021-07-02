
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/images/favicon.svg" rel="icon" type="image/svg+xml" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Open+Sans:300,400,600|Montserrat:300,400,600" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
