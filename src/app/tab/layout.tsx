"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const Tab = ({ href, segment }: { href: string; segment: string | null }) => {
  return (
    <li>
      <Link
        href={`/tab${href === "Index" ? "" : `/${href}`}`}
        className={`${segment === href ? " text-blue-600" : ""}${segment === null && href === "Index" ? " text-blue-600" : ""}`}
      >
        {href}
      </Link>
    </li>
  );
};

export default function TabLayout({ children }: { children: React.ReactNode }) {
  // 取得當前的 active segment
  const activeSegment = useSelectedLayoutSegment();
  const tabs = ["Index", "iOS", "Android", "macOS", "Windows"];
  return (
    <>
      <div className="p-4 border rounded">
        <ul className="flex gap-4">
          {tabs.map((href) => (
            <Tab key={href} href={href} segment={activeSegment} />
          ))}
        </ul>
      </div>
      <div className="p-4">{children}</div>
    </>
  );
}
