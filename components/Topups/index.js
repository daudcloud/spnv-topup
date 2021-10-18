import { useTopups } from "../../contexts/TopupContext";

const Topups = () => {
  const topups = useTopups();
  return (
    <>
      {topups.map((topup, index) => (
        <div key={index}>
          <h3 className="text-gray-200">{topup.name}</h3>
          <p>{topup.price}</p>
        </div>
      ))}
    </>
  );
};

export default Topups;
