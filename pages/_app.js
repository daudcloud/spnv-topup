import TopupProvider from "../contexts/TopupContext";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <TopupProvider>
      <Component {...pageProps} />
    </TopupProvider>
  );
}

export default MyApp;
