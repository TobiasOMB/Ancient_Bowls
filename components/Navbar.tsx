"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 shadow-md">

      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        Ancient Bowls
      </Link>

      {/* Menü */}
      <div className="flex gap-8 text-lg">

        {[
          { name: "Geschichte", href: "/geschichte" },
          { name: "Neu", href: "/neu" },
          { name: "Verlosung", href: "/verlosung" },
          { name: "Impressum", href: "/impressum" },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="relative cursor-pointer font-medium
              after:absolute after:bottom-0 after:left-1/2
              after:h-[2px] after:w-0 after:bg-black
              after:transition-all after:duration-300
              hover:after:w-full hover:after:left-0
              hover:font-bold"
          >
            {item.name}
          </Link>
        ))}

      </div>

      {/* Login */}
      <Link
        href="/login"
        className="border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
      >
        Login
      </Link>
    </nav>
  );
}
