import React from 'react';

import { Login } from '@/components/login';
import { Modal } from '@/components/modal';

type Props = {};

const Page = (props: Props) => {
  return (
    <Modal title="Log in">
      <Login />
    </Modal>
  );
};

export default Page;
