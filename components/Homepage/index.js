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
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-5 pb-20 md:grid-cols-2">
      {categories.map((category, index) => (
        <div className="card" key={index}>
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
          <div className="flex justify-between items-center p-4">
            <h3 className="font-bold text-sm text-gray-900">
              {category.category}
            </h3>
            <Link
              href={`/games/${category.name.toLowerCase().replace(" ", "-")}`}
            >
              <a className="btn-main text-sm">Lihat</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
