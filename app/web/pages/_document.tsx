import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/styles/fonts.css" />
          <link
            rel="icon"
            type="image/x-icon"
            href="https://a0.muscache.com/nextbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="https://a0.muscache.com/nextbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
