"use client";

import Button from "@/components/button";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Product() {
  const router = useRouter();
  const pathname = usePathname();
  const [productNum, setProductNum] = useState<string>("");
  const handleButtonOnclick = (value: string) => {
    router.push(`${pathname}/${value}`);
  };
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="PN">Enter product id</label>
      <div>
        <input
          id="PN"
          type="text"
          className="border rounded p-2"
          value={productNum}
          onChange={(e) => {
            setProductNum(e.target.value);
          }}
        />
      </div>
      <div>
        <Button
          onClick={() => {
            handleButtonOnclick(productNum);
          }}
        >
          Go!
        </Button>
      </div>
    </div>
  );
}
