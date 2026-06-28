'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Loader2, CircleUserRound, LockKeyhole } from 'lucide-react';
import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
import { useAuthStore } from '@/store/authStore';
import { LoginSchema } from '@/lib/schemas';
import { toast } from 'sonner';
import LoginHeader from '@/components/LoginHeader';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState('');

  const router = useRouter();
  const { login, isLoading, error, isAuthenticated, clearError } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearError();
    }
  }, [error, clearError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Validate with Zod
    const result = LoginSchema.safeParse({ username, password });
    if (!result.success) {
      setValidationError(result.error.issues[0].message);
      return;
    }

    const success = await login(username, password);
    if (success) {
      toast.success('Welcome back!');
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <LoginHeader />
      <div className="bg-[white] p-4">
        <div className="mb-2 p-2 px-4 mx-auto border border-gray-300 rounded-md max-w-[400px] text-[12px]">
          FDIC-Insured - Backed by the full faith and credit of the U.S. Government
        </div>
        <div className="mt-3">
          {error && (
            <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">
              {error}
            </p>
          )}
        </div>

        <div className="bg-white mx-auto rounded-xl w-full px-4 py-7">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2 relative">
              <Input
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="h-12 pl-0! px-10 rounded-none text-[#4c4c50] bg-transparent placeholder:text-[#4c4c50] placeholder:text-base border-t-0 border-x-0 border-b border-b-gray-300"
                required
              />
            </div>

            <div className="space-y-2 relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="h-12 pl-0! px-10 rounded-none text-[#4c4c50] bg-transparent placeholder:text-[#4c4c50] placeholder:text-base border-t-0 border-x-0 border-b border-b-gray-300"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4c4c50] hover:text-gray-700 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {validationError && <p className="text-sm text-[#ef4343]">{validationError}</p>}

            <div className="flex flex-col gap-3 text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-200 accent-primary" />
                <span className="text-gray-300">Remember me</span>
              </label>

              <p className="text-xs text-gray-400">
                To help keep your account secure, save your username only on devices that aren't
                used by other people.
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 bg-[#235ae4] text-white rounded-sm font-semibold text-lg transition-opacity hover:opacity-90 active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Logining in...
                </>
              ) : (
                'Log in'
              )}
            </button>
          </form>
        </div>

        <div className="w-full min-h-[70px] bottom-0 z-50 flex flex-col px-[10px] p-[20px] pb-11">
          <p className="text-sm text-[#22262A] text-center">
            Investment and Insurance products and services including annuities
          </p>
          <ul className="list-disc pl-9 text-sm">
            <li className="">Not a Deposit</li>
            <li className="">Not FDIC Insured</li>
            <li className="">May Lose Value</li>
            <li className="">Not Bank Guaranteed</li>
            <li className="">Not Insured by any Federal Government Agency</li>
          </ul>
        </div>
        <p className="text-sm text-[#22262A] text-center">
          ©2026 U.S Bank - OLB Cloud : 2.46.0_BN_7474
        </p>
      </div>
    </div>
  );
}
