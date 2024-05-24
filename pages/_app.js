import { ThemeProvider } from "next-themes";
import { PopupProvider } from "../context/PopupContext";
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <PopupProvider>
      <ThemeProvider defaultTheme="light" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </PopupProvider>
  );
}

export default MyApp;
