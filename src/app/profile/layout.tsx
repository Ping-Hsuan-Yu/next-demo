'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabRedLayout({ children }: { children: React.ReactNode }) {
  const linkArray = ["profile", "account", "cart", "favorite", "setting"];
  const pathname = usePathname();
  const path = pathname.split("/").at(-1);
  return (
    <div>
      <nav>
        <ul className="flex gap-4 border p-4 rounded">
          {linkArray.map((link) => (
            <li key={link}>
              <Link href={`/profile/${link !== "profile" ? link : ""}`} className={`capitalize ${path === link ? "text-blue-600" : ""}`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">{children}</div>
    </div>
  );
}
