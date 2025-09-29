"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[30px] relative flex items-center justify-center bg-[#0c2074] p-5 py-4">
      <Image src="https://i.imgur.com/bnDmNVe.png" width={126} height={32} className="w-[100px] h-[25px]" alt="logo" />
    </div>
  );
}
