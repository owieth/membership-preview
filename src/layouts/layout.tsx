import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <main style={{ position: 'relative', height: '100vh', width: '100vw' }}>{children}</main>
    </>
  );
}