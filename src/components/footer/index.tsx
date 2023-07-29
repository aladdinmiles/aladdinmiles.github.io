import Image from 'next/image';
import { LogoArea } from '../navigation/styles';
import {
  FooterBar,
  FooterHeader,
  FooterLink,
  FooterSection,
  FooterText,
  Socials,
  StyledImage,
  StyledImageText
} from './styles';

export const Footer: React.FC = () => {
  return (
    <FooterBar>
      <FooterSection>
        <LogoArea href="/">
          <StyledImage src="/logo.png" alt="AladdinMiles logo" width={45} height={32} />
          <StyledImageText src="/logoText.svg" alt="AladdinMiles logo" width={170.4} height={48} />
        </LogoArea>
        <FooterText>&copy; Copyright 2023 AladdinMiles, all rights reserved</FooterText>
        <Socials>
          <Image src="/images/facebook-frame.svg" width={24} height={24} alt="facebook" />
          <Image src="/images/instagram-black.svg" width={24} height={24} alt="facebook" />
          <Image src="/images/twitter-black.svg" width={24} height={24} alt="facebook" />
          <Image src="/images/whats-app-black.svg" width={24} height={24} alt="facebook" />
        </Socials>
      </FooterSection>
      <FooterSection>
        <FooterHeader>Product</FooterHeader>
        <FooterLink href="/#download">Download the mobile app</FooterLink>
        <FooterLink href="/merchant">Become a merchant</FooterLink>
        <FooterLink href="/merchant#partners">Partner with us</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterHeader>Legal</FooterHeader>
        <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
        <FooterLink href="/terms-conditions">Terms and Conditions</FooterLink>
        <FooterLink href="/merchant-tc">Merchant T&Cs</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterHeader>Company</FooterHeader>
        <FooterLink href="/about#careers">Careers</FooterLink>
        <FooterLink href="/about">About Us</FooterLink>
        <FooterLink href="/#">Email: hello@aladdinmiles.com</FooterLink>
      </FooterSection>
    </FooterBar>
  );
};
