'use client';

import React, { useContext } from 'react';
import Link from 'next/link';

import { HomeIcon } from 'lucide-react';
import { ModalContext } from '@/context/modal-context';
import { useModal } from '@/lib/useModal';

type Props = {};

export const Nav = (props: Props) => {
  const modal = useModal();

  return (
    <nav className="bg-black text-white p-4 px-6 flex space-x-8">
      <Link href="/">
        <HomeIcon />
      </Link>
      <Link
        href="/login"
        onClick={() => modal.setOpen(true)}
      >
        Log in
      </Link>
    </nav>
  );
};
