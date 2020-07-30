import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link href="/static/images/favicon.ico" rel="icon" type="image/x-icon" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Open+Sans:300,400,600|Montserrat:300,400,600" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}