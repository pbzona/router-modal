import { ModalContext } from '@/context/modal-context';
import { useContext } from 'react';

export const useModal = () => {
  const ctx = useContext(ModalContext);

  return ctx;
};
