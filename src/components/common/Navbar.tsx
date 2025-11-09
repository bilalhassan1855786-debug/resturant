"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Recipes", path: "/recipes" },
    { name: "Details", path: "/recipesdetails" }, // ✅ New Page Added
    
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-orange-600 text-white shadow-lg p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Restaurant</h1>
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`hover:text-yellow-300 ${
                pathname === item.path ? "text-yellow-300 underline" : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
