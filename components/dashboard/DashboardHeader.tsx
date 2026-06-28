'use client';

import { useAuthStore } from '@/store/authStore';
import { User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardHeader() {
  const { user, bank } = useAuthStore();
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <header className="pb-6 animate-fade-up">
      <div className="flex p-5 py-2 items-center border-b border-b-[#E7B547] bg-[#0c2074] justify-between">
      <Image src="https://i.imgur.com/bnDmNVe.png" width={126} height={32} className="w-[90px] h-[20px]" alt="logo" />

        <div className="flex items-center gap-3">
          {user?.avatar ? (
            <Link href="/profile" className="rounded-full border border-[#ffffff] transition-shadow">
              <Image
                src={user?.avatar || ''}
                width={180}
                height={28}
                className="w-[45px] h-[45px] rounded-full"
                alt="logo"
              />
            </Link>
          ) : (
            <Link
              href="/profile"
              className="p-2.5 rounded-full border border-[#ffffff] transition-shadow"
            >
              <User className="w-5 h-5 text-white/80" />
            </Link>
          )}
        </div>
      </div>

      <div className="mt-5 px-5">
        <p className="text-gray-500 text-sm">{greeting},</p>
        <h1 className="text-2xl font-bold text-foreground">
          {user?.firstName} {user?.lastName}
        </h1>
        {bank && <p className="text-xs text-gray-500mt-0.5">{bank.name}</p>}

        {/* {user?.warningMsg == '' ? '' : <p className="w-full p-2 rounded bg-[#fac6c6] mt-4">{user?.warningMsg}</p>} */}
        {user?.warningMsg && (
          <p className="w-full text-lg p-4 text-white rounded-md bg-[#c44444] mt-4">
            {user?.warningMsg}
          </p>
        )}
      </div>
    </header>
  );
}
