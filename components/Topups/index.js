import { useTopups } from "../../contexts/TopupContext";

const Topups = () => {
  const topups = useTopups();
  return (
    <>
      {topups.map((topup) => (
        <>
          <h3>{topup.name}</h3>
          <p>{topup.price}</p>
        </>
      ))}
    </>
  );
};

export default Topups;
