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
                    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" hidden>
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" />
            <input type="text" name="location" />
            <input type="tel" name="phone" />
            <input type="email" name="email" />
            <select name="service">
              <option value="balloons">Balloons</option>
              <option value="flowerBouquet">Fresh flower bouquet</option>
              <option value="360Camera">360 Camera</option>
              {/* Add other services as needed */}
            </select>
            <input type="date" name="date" />
            <input type="time" name="time" />
            <input type="radio" name="locationType" value="Indoor" />
            <input type="radio" name="locationType" value="Outdoor" />
            <input type="radio" name="locationType" value="Both" />
            <textarea name="message"></textarea>
          </form>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
