'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../buttons';
import {
  DropDownView,
  LogoArea,
  MenuAction,
  MobileLink,
  MobileWrapper,
  NavBar
} from './styles';

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M3 12H21M3 6H21M9 18H21"
      stroke="#1D2029"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="#1D2029"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const TopBarMobile: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <MobileWrapper>
      <NavBar id="mobile">
        <LogoArea href="/">
          <Image
            className="actualLogo"
            src="/images/Aladdin-Logo-Vertical-Color.svg"
            alt="AladdinMiles logo"
            width={124.44}
            height={28}
          />
        </LogoArea>
        <MenuAction
          onClick={() => setOpen((prev) => !prev)}
          aria-label="toogle-navigation"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </MenuAction>
      </NavBar>
      {open && (
        <DropDownView>
          <MobileLink href="/">Home</MobileLink>
          <MobileLink href="/about">About us</MobileLink>
          <MobileLink href="/merchant">Become a merchant</MobileLink>
          <MobileLink href="/privacy-policy">Privacy policy</MobileLink>
          <MobileLink href="/terms-conditions">Terms and conditions</MobileLink>
          <MobileLink href="/merchant-tc">
            Merchant terms and conditions
          </MobileLink>
          <Button href="/#download">Download the app</Button>
        </DropDownView>
      )}
    </MobileWrapper>
  );
};
