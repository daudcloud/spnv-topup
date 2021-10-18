import TopupProvider from "../contexts/TopupContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <TopupProvider>
      <Component {...pageProps} />
    </TopupProvider>
  );
}

export default MyApp;
