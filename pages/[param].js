import { useTopups } from "../contexts/TopupContext";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/Layout";

const Category = () => {
  const topups = useTopups();
  const router = useRouter();
  const { param } = router.query;
  return (
    <>
      <Layout title={param}>
        {topups
          .filter(
            (topup) => topup.category.toLowerCase().replace(" ", "-") === param
          )
          .map((topup) => (
            <div>
              {topup.name}
              {topup.price}
            </div>
          ))}
      </Layout>
    </>
  );
};

export default Category;
