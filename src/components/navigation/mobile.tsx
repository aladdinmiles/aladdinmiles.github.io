'use client';
import Image from 'next/image';
import { useState } from 'react';
import { LogoArea, MenuAction, NavBar } from './styles';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 12H21M3 6H21M9 18H21" stroke="#1D2029" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TopBarMobile: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavBar id="mobile">
      <LogoArea href="/">
        <Image className="actualLogo" src="/logo.png" alt="AladdinMiles logo" width={45} height={32} />
        <Image className="logo-text" src="/logoText.svg" alt="AladdinMiles logo" width={160} height={45} />
      </LogoArea>
      <MenuAction onClick={() => setOpen(true)}>
        <MenuIcon />
      </MenuAction>
    </NavBar>
  );
};
