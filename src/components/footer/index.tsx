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
        <LogoArea>
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
        <FooterLink href="/#">Download the mobile app</FooterLink>
        <FooterLink href="/#">Become a merchant</FooterLink>
        <FooterLink href="/#">Partner with us</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterHeader>Legal</FooterHeader>
        <FooterLink href="/#">Privacy Policy</FooterLink>
        <FooterLink href="/#">Terms and Conditions</FooterLink>
        <FooterLink href="/#">Merchant T&Cs</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterHeader>Company</FooterHeader>
        <FooterLink href="/#">Careers</FooterLink>
        <FooterLink href="/about">About Us</FooterLink>
        <FooterLink href="/#">Email: hello@aladdinmiles.com</FooterLink>
      </FooterSection>
    </FooterBar>
  );
};
