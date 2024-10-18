export default function DashboardLayout({
  children,
  room,
  device,
  status,
  setting,
}: Readonly<{ children: React.ReactNode; room: React.ReactNode; device: React.ReactNode; status: React.ReactNode; setting: React.ReactNode }>) {
  return (
    <>
      {children}
      <div className="grid grid-cols-3 grid-rows-4 grid-flow-col gap-3 h-full">
        <div className="border border-zinc-300 rounded-md p-3 ">{room}</div>
        <div className="border border-zinc-300 rounded-md p-3 row-span-3">{device}</div>
        <div className="border border-zinc-300 rounded-md p-3 col-span-2 row-span-2">{status}</div>
        <div className="border border-zinc-300 rounded-md p-3 col-span-2 row-span-2">{setting}</div>
      </div>
    </>
  );
}
