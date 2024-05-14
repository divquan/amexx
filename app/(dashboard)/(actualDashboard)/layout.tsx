import React from 'react';
import Navbar from './dashboard/_components/navbar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default layout;
