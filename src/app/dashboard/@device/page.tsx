import { pause } from "@/lib/utils";
import Link from "next/link";

export default async function Device() {
  await pause(2000);

  return (
    <>
      <div>Device List</div>
      <div className="mt-4 flex flex-col gap-1">
        <Link href="/dashboard/main-light">💡 Main Light</Link>
        <Link href="/dashboard/tv">📺 TV</Link>
        <Link href="/dashboard/blind">🪟 Blind</Link>
      </div>
    </>
  );
}
