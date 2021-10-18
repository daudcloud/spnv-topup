import TopupProvider from "../contexts/TopupContext";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <TopupProvider>
      <Component {...pageProps} />
    </TopupProvider>
  );
}

export default MyApp;
