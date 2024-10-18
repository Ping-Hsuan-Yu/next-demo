"use client";
export default function Home() {
  return (
    <div>
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
