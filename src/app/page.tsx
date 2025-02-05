"use client";
import NumberFlow from "@number-flow/react";
import { useState } from "react";
export default function Home() {
  const [number, setNumber] = useState(5173);
  return (
    <div>
      <NumberFlow
        value={number}
        continuous
        className="text-9xl"
        onClick={() => {
          setNumber(Math.random() * 100000 * Math.random());
        }}
      />
      <p>Click the number see some magic🪄</p>
      <br />
      <ul className="list">
        <li>
          Tab
          <ul>
            <li>
              <code>layout.tsx</code>
            </li>
            <li>
              <code>useSelectedLayoutSegment()</code>
            </li>
            <li>
              <code>&lt;Link /&gt;</code>
            </li>
          </ul>
        </li>

        <li>
          Profile
          <ul>
            <li>multi layout</li>
            <li>
              <code>usePathname()</code>
            </li>
          </ul>
        </li>
        <li>
          Product
          <ul>
            <li>Dynamic Routes</li>
            <li>
              <code>useRouter()</code>
            </li>
          </ul>
        </li>
        <li>
          Dashboard
          <ul>
            <li>Parallel Routes</li>
            <li>
              <code>loading.tsx</code>
            </li>
            <li>
              <code>error.tsx</code>
            </li>
            <li>
              <code>default.tsx</code>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
