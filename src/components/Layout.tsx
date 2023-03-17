import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <header />
      <main>{children}</main>
    </>
  );
}