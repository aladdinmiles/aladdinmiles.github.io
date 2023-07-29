'use client';
import {
  fontSize,
  heightPixel,
  mobileFontSize,
  mobileHeightPixel,
  mobileStyle,
  mobileWidthPixel,
  widthPixel
} from '@/utils/pxToVW';
import styled from '@emotion/styled';
import { Manrope } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

export const FooterBar = styled.footer({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${heightPixel(74)} ${widthPixel(80)}`,
  background: '#002466',
  ...mobileStyle({
    padding: `${mobileHeightPixel(24)} ${mobileWidthPixel(24)}`,
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
    gap: mobileHeightPixel(56)
  })
});

export const Content = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: `${widthPixel(209)} ${widthPixel(109)} ${widthPixel(109)}`,
  ...mobileStyle({
    flexDirection: 'column'
  })
});

const man = Manrope({
  weight: '400',
  subsets: ['latin', 'cyrillic']
});

const man600 = Manrope({
  weight: '600',
  subsets: ['latin', 'cyrillic']
});

export const BaseText: React.FC<{ className?: string; children: ReactNode }> = ({ className, children }) => (
  <p className={`${man.className} ${className}`}>{children}</p>
);

export const BaseHeader: React.FC<{ className?: string; children: ReactNode }> = ({ className, children }) => (
  <p className={`${man600.className} ${className}`}>{children}</p>
);

export const FooterText = styled(BaseText)({
  fontSize: fontSize(16),
  color: '#ffffff',
  display: 'block',
  ...mobileStyle({
    fontSize: mobileFontSize(16)
  })
});

export const FooterHeader = styled(BaseHeader)({
  fontSize: fontSize(16),
  color: '#ffffff',
  display: 'block',
  ...mobileStyle({
    fontSize: mobileFontSize(16)
  })
});

export const FooterLink = FooterText.withComponent(Link);

export const FooterSection = styled.div({
  maxWidth: widthPixel(280),
  display: 'flex',
  flexDirection: 'column',
  gap: heightPixel(16),
  ...mobileStyle({
    maxWidth: mobileWidthPixel(270)
  })
});

export const StyledImage = styled(Image)({
  // width: widthPixel(40.8),
  // height: heightPixel(28.8)
});

export const StyledImageText = styled(Image)({
  // width: widthPixel(170.4),
  // height: heightPixel(48)
});

export const Socials = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: widthPixel(16),
  paddingTop: heightPixel(8),
  ...mobileStyle({
    gap: mobileWidthPixel(48)
  })
});
