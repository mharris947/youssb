"use client";

import { UimBars } from "@/components/svgIcons";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GoCheckCircleFill } from "react-icons/go";

export default function Header({ handleLogout, user }: any) {
  const [open, setOpen] = useState(false);

  const openNav = () => {
    setOpen(true);
  };

  const closeNav = () => {
    setOpen(false);
  };

  return (
    <div className="w-full min-h-[30px] relative flex items-center justify-between bg-[#0c2074] border-b-4 border-[#ffcd41] p-[16px] py-[15px]">
      <div className="flex items-center justify-between gap-3 w-full">
        <Image
          src="https://i.imgur.com/HCpm00D.png"
          width={200}
          height={200}
          className="w-[130px] h-[13px]"
          alt="logo"
        />
        <UimBars onClick={openNav} />
      </div>
      {open && (
        <div className="w-full h-screen fixed z-50 left-0 top-0 right-0 bg-[#FAFAF8]">
          <div className="bg-white sticky top-0 z-10 p-3 py-5 flex items-center justify-between gap-1">
            <div className="flex items-center gap-2">
              <IoIosArrowBack onClick={closeNav} />
              <span className="text-[#252525] font-semibold">My Profile</span>
            </div>
            <button onClick={handleLogout} className="p-3 py-2 rounded-lg border-none outline-none font-medium border bg-[#0c2074] text-white text-sm">Sign out</button>
          </div>
          <div className="p-4">
            <div className="bg-white text-sm rounded-lg p-5 py-7 flex flex-col items-center justify-center gap-8 mb-4">
              <div className="flex w-full justify-between items-center">
                <span className="text-[#3f3f3f] font-normal">Full Name</span>
                <span className="uppercase text-[#252525] font-medium truncate max-w-[200px] sm:max-w-full">
                  {user.holder.fullName}&nbsp;{user.holder.lastName}
                </span>
              </div>
              <div className="flex w-full justify-between items-center">
                <span className="text-[#3f3f3f] font-normal ">
                  Mobile Number
                </span>
                <span className="text-[#252525] font-medium truncate max-w-[200px] sm:max-w-full">
                {user.holder.mobileNumber}
                </span>
              </div>
              <div className="flex w-full justify-between items-center">
                <span className="text-[#3f3f3f] font-normal">Nick Name</span>
                <span className="text-[#252525] font-medium truncate max-w-[200px] sm:max-w-full">{user.holder.nickName}</span>
              </div>
              <div className="flex w-full justify-between items-center">
                <span className="text-[#3f3f3f] font-normal">Gender</span>
                <span className="text-[#252525] font-medium">{user.holder.gender}</span>
              </div>
              <div className="flex w-full justify-between items-center">
                <span className="text-[#3f3f3f] font-normal">Email</span>
                <span className="text-[#252525] font-medium flex items-center gap-1">
                  <span className="bg-[#0c2074]/30 text-black text-xs p-2 py-1 rounded-lg flex items-center gap-1">
                    Verified <GoCheckCircleFill />
                  </span>
                  <span>{user.holder.email}</span>
                </span>
              </div>
              <div className="w-full justify-between hidden items-center">
                <span className="text-[#3f3f3f] font-normal">
                  Account Number
                </span>
                <span className="text-[#252525] font-medium flex items-center gap-1">
                  012****324
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
