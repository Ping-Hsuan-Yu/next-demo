"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const linkData = [
    { href: "", text: "🏠 Home" },
    { href: "tab", text: "🏷️ Tab" },
    { href: "profile", text: "🐻‍❄️ Profile" },
    { href: "product", text: "🍊 Product" },
    { href: "dashboard", text: "📂 Dashboard" },
    { href: "formik", text: "📋 formik" },
  ];

  return (
    <nav className="flex flex-col items-start p-10 border-e h-full">
      <div className="mb-5">
        <Image src="/logo.avif" alt="logo" width={150} height={30} />
      </div>
      <ul>
        {linkData.map((data) => (
          <NavLink key={data.text} href={data.href} text={data.text} pathname={pathname} />
        ))}
      </ul>
    </nav>
  );
}

const NavLink = ({
  href,
  text,
  pathname,
}: {
  href: string;
  text: string;
  pathname: string;
}) => {
  const path = pathname.split("/")[1];
  return (
    <li>
      <Link
        className={`${href === path ? "text-blue-600" : ""}`}
        href={`/${href}`}
      >
        {text}
      </Link>
    </li>
  );
};
