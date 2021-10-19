import Head from "next/head";
import Navbar from "../Navbar";

const Layout = ({ children, title }) => {
  return (
    <div className="px-8">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/spnv.png" />
      </Head>
      <main className="max-w-5xl m-auto">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;