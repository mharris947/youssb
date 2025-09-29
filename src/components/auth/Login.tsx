'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  return (
    <div className="h-screen relative">
      <Header />
      <div className="bg-[white] p-4">
        <div className="mb-2 p-2 px-4 mx-auto border border-gray-300 rounded-md max-w-[400px] text-[12px]">FDIC-Insured - Backed by the full faith and credit of the U.S. Government</div>
        <div className="mt-3">{error && <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>

        <div className="bg-white mx-auto rounded-xl w-full px-4 py-7">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-4">
              <div className="flex relative flex-col gap-3">
                <input
                  type="text"
                  value={username}
                  placeholder="Username"
                  className="p-4 pl-0 pb-1 border-t-0 border-x-0 text-[#4c4c50] bg-transparent placeholder:text-[#4c4c50] placeholder:text-base border border-gray-500 outline-none"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="flex relative flex-col gap-3">
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  className="p-4 pl-0 pb-1 border-t-0 border-x-0 text-[#4c4c50] bg-transparent placeholder:text-[#4c4c50] placeholder:text-base border border-gray-500 outline-none"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-2 mt-7">
              <button type="submit" className="p-4 py-2 rounded-lg bg-[#235ae4] w-full text-white font-semibold">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full min-h-[70px] absolute bottom-0 z-50 flex flex-col px-[10px] p-[20px] pb-11">
        <p className="text-sm text-[#22262A] text-center">©2025 U.S Bank - OLB Cloud : 2.46.0_BN_7474</p>
        <p className="text-sm text-[#22262A] text-center">Investment and Insurance products and services including annuities</p>
        <ul className="list-disc pl-9 text-sm">
          <li className="">Not a Deposit</li>
          <li className="">Not FDIC Insured</li>
          <li className="">May Lose Value</li>
          <li className="">Not Bank Guaranteed</li>
          <li className="">Not Insured by any Federal Government Agency</li>
        </ul>
      </div>
    </div>
  );
}
