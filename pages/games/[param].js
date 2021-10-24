import { useTopups } from "../../contexts/TopupContext";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../../components/Layout";

const Category = () => {
  const topups = useTopups();
  const router = useRouter();
  const { param } = router.query;
  function formattedNumber(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }
  return (
    <>
      <Layout title={param}>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-5 pb-20 md:grid-cols-2">
          {topups
            .filter(
              (topup) =>
                topup.category.toLowerCase().replace(" ", "-") === param
            )
            .map((topup, index) => (
              <div className="card" key={index}>
                <div className="relative w-full h-36">
                  <Image
                    src={`/images/${topup.category
                      .toLowerCase()
                      .replace(" ", "")}.jpg`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">{topup.name}</h3>
                  <p>Rp{formattedNumber(topup.price)}</p>
                </div>
              </div>
            ))}
        </div>
      </Layout>
    </>
  );
};

export default Category;
