import { pause } from "@/lib/utils";

export default async function DeviceStatus({ params }: { params: { name: string } }) {
  await pause(3000)
  return <div>{params.name} Status</div>;
}
