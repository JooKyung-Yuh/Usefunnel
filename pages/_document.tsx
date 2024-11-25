import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />

          {/* Favicons */}
          <link href="/assets/img/favicon.png" rel="icon" />
          <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

          {/* Fonts */}
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />

          {/* Vendor CSS Files */}
          <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
          <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
          <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
          <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

          {/* Main CSS File */}
          <link href="/assets/css/main.css" rel="stylesheet" />
        </Head>
        <body className="index-page">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
