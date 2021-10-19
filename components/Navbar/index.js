import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-9 flex justify-between items-center">
      <h1 className="text-4xl text-gray-700">SPNV Topups</h1>
      <Link href="/cara-bayar">
        <a className="btn-main">Cara Bayar</a>
      </Link>
    </div>
  );
};

export default Navbar;
