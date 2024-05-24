import React from 'react';

import { Login } from '@/components/login';
import { Nav } from '@/components/nav';

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="border border-muted w-[300px] p-12">
          <h1 className="font-bold text-3xl mb-8">Login</h1>
          <Login />
        </div>
      </main>
    </>
  );
}
