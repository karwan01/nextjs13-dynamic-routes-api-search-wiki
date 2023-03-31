import React from "react";
import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col drop-shadow-xl md:flex-row justify-center md:justify-between items-center sticky top-0 right-0 left-0 h-[70px] bg-slate-800 px-10">
      <Link href="/" className="hidden md:inline text-2xl font-bold text-white">
        Rocket 🚀
      </Link>
      <Search />
    </nav>
  );
};

export default Navbar;
