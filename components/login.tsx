import React from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';

type Props = {};

export const Login = (props: Props) => {
  return (
    <div className="min-w-[400px]">
      <Label htmlFor="email">Email address</Label>
      <Input
        id="email"
        type="text"
        name="email"
      />
      <Label htmlFor="email">Password</Label>
      <Input
        id="password"
        type="password"
        name="password"
      />
    </div>
  );
};
