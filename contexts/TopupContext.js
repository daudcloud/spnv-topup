import { createContext, useState, useEffect, useContext } from "react";

const TopupContext = createContext();

export const useTopups = () => {
  return useContext(TopupContext);
};

export default function TopupProvider({ children }) {
  const [topups, setTopups] = useState([]);

  useEffect(async () => {
    const res = await fetch("http://192.168.2.151:3000/api/hello");
    const data = await res.json();
    setTopups(data);
  });

  return (
    <TopupContext.Provider value={topups}>{children}</TopupContext.Provider>
  );
}
