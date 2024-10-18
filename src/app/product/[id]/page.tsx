"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";

export default function ProductInfo({ params }: { params: { id: string } }) {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-3">
      <div>Product ID: {params.id}</div>
      <div>
        <Button
          onClick={() => {
            router.back();
          }}
        >
          back to Product
        </Button>
      </div>
    </div>
  );
}
