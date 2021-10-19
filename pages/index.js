import Image from "next/image";
import Homepage from "../components/Homepage";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Layout title="SPNV Topups">
        <Homepage />
      </Layout>
    </div>
  );
}
