import { useTopups } from "../../contexts/TopupContext";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  const [categories, setCategories] = useState([
    {
      name: "Point Blank",
      category: "PB Cash",
    },
    {
      name: "Valorant",
      category: "Valorant Points",
    },
    {
      name: "Free Fire",
      category: "Free Fire Diamonds",
    },
    {
      name: "Mobile Legends",
      category: "MLBB Diamonds",
    },
    {
      name: "Genshin Impact",
      category: "Genesis Crystals",
    },
    {
      name: "Steam Wallet",
      category: "Steam Wallet IDR",
    },
    {
      name: "Megaxus",
      category: "Megaxus",
    },
    {
      name: "Garena Shell",
      category: "Garena Shell",
    },
    {
      name: "Apex Legends",
      category: "Apex Coins",
    },
    {
      name: "COD Mobile",
      category: "COD Mobile",
    },
  ]);
  return (
    <div className="grid grid-cols-3 gap-8 pb-20">
      {categories.map((category) => (
        <div className="rounded-xl overflow-hidden shadow-md">
          {/* image */}
          <div className="relative w-full h-36">
            <Image
              src={`/images/${category.name
                .toLowerCase()
                .replace(" ", "")}.jpg`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex justify-between items-center my-6 px-4">
            <h3 className="font-bold">{category.category}</h3>
            <Link href={`/${category.name.toLowerCase().replace(" ", "-")}`}>
              <a className="bg-blue-400 text-white font-bold rounded-md p-2 px-4 hover:bg-blue-600 cursor-pointer transition-all">
                Lihat
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
