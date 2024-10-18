"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const NavLink = ({ href, text, pathname }: { href: string; text: string; pathname: string }) => {
    const path = pathname.split("/")[1]
    return (
      <li>
        <Link className={`${href === path ? "text-blue-600" : ""}`} href={`/${href}`}>
          {text}
        </Link>
      </li>
    );
  };
  return (
    <nav className="flex flex-col items-start p-10 border-e h-full">
      <div className="mb-5">
        <Image src="/logo.avif" alt="logo" width={150} height={30} />
      </div>
      <ul>
        <NavLink href="" text="🏠 Home" pathname={pathname} />
        <NavLink href="tab" text="🏷️ Tab" pathname={pathname} />
        <NavLink href="profile" text="🐻‍❄️ Profile" pathname={pathname} />
        <NavLink href="product" text="🍊 Product" pathname={pathname} />
        <NavLink href="dashboard" text="📋 Dashboard" pathname={pathname} />
      </ul>
    </nav>
  );
}
