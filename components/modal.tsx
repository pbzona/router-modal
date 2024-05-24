'use client';

import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { ModalContext } from '@/context/modal-context';
import { Button } from './ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { useModal } from '@/lib/useModal';

type Props = {
  title?: string;
};

export const Modal = ({ title, children }: React.PropsWithChildren<Props>) => {
  const modal = useModal();
  const router = useRouter();

  return (
    <Dialog open={modal.open}>
      <DialogContent>
        {title && (
          <DialogHeader>
            <DialogTitle className="text-2xl">{title}</DialogTitle>
          </DialogHeader>
        )}
        {children}
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                modal.setOpen(false);
                router.back();
              }}
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
