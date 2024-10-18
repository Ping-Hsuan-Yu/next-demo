import { pause } from "@/lib/utils";

export default async function DeviceSetting({ params }: { params: { name: string } }) {
  await pause(1500);

  return <div>{params.name} Setting</div>;
}
