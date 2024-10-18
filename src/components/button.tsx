import { MouseEventHandler } from "react";

export default function Button({
  children,
  onClick,
}: Readonly<{
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}>) {
  return (
    <button className="rounded p-2 bg-blue-600 hover:bg-blue-500 text-white transition" onClick={onClick}>
      {children}
    </button>
  );
}
