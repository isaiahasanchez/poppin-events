import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* Hidden Form for Netlify */}
          <form name="testForm" netlify netlify-honeypot="bot-field" action='/' hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
          </form>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
