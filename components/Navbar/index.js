import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-9 flex items-center">
      <Link href="/">
        <a className="text-4xl text-gray-700">SPNV Topups</a>
      </Link>
      <Link href="/">
        <a className="ml-auto font-bold rounded-md p-2 px-4 hover:bg-gray-100 cursor-pointer transition-all mr-4 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-75">
          Home
        </a>
      </Link>
      <Link href="/cara-bayar">
        <a className="btn-main">Cara Bayar</a>
      </Link>
    </div>
  );
};

export default Navbar;
