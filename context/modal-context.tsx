'use client';

import React, { useState } from 'react';

type ModalValues = {
  open: boolean;
  setOpen: any;
};

const defaultValues = { open: false, setOpen: null };

export const ModalContext = React.createContext<ModalValues>(defaultValues);

export const ModalProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [open, setOpen] = useState<boolean>(false);

  return <ModalContext.Provider value={{ open, setOpen }}>{children}</ModalContext.Provider>;
};
