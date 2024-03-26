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
import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

const man = Manrope({
  weight: '400',
  subsets: ['latin', 'cyrillic']
});

type Props = LinkProps & {
  children: ReactNode;
};

type NoLinkProps = React.ClassAttributes<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
  };

export const Button: React.FC<Props> = ({ children, href = '/#', ...rest }) => {
  return (
    <Container href={href} aria-label="buttons" {...rest}>
      <Text className={man.className}>{children}</Text>
    </Container>
  );
};

export const OutlinedButton: React.FC<Props> = ({
  children,
  href = '/#',
  ...rest
}) => {
  return (
    <OutlinedContainer href={href} aria-label="buttons" {...rest}>
      <OutlinedText className={man.className}>{children}</OutlinedText>
    </OutlinedContainer>
  );
};

export const NoLinkButton: React.FC<NoLinkProps> = ({ children, ...rest }) => {
  return (
    <ButtonContainer aria-label="buttons" {...rest}>
      <Text className={man.className}>{children}</Text>
    </ButtonContainer>
  );
};

export const OutlinedNoLinkButton: React.FC<NoLinkProps> = ({
  children,
  ...rest
}) => {
  return (
    <OutlinedButtonContainer aria-label="buttons" {...rest}>
      <OutlinedText className={man.className}>{children}</OutlinedText>
    </OutlinedButtonContainer>
  );
};

const Container = styled(Link)({
  backgroundColor: '#FF1654',
  width: widthPixel(240),
  height: heightPixel(56),
  borderRadius: widthPixel(4),
  alignItems: 'center',
  justifyContent: 'center',
  display: 'inline-flex',
  textDecoration: 'none',
  ...mobileStyle({
    width: mobileWidthPixel(220),
    height: mobileHeightPixel(48),
    borderRadius: mobileWidthPixel(4)
  })
});

const ButtonContainer = styled.button({
  backgroundColor: '#FF1654',
  width: widthPixel(240),
  height: heightPixel(56),
  borderRadius: widthPixel(4),
  alignItems: 'center',
  justifyContent: 'center',
  display: 'inline-flex',
  textDecoration: 'none',
  ...mobileStyle({
    width: mobileWidthPixel(220),
    height: mobileHeightPixel(48),
    borderRadius: mobileWidthPixel(4)
  })
});

const OutlinedButtonContainer = styled.button({
  backgroundColor: '#FFFFFF',
  width: widthPixel(240),
  height: heightPixel(56),
  borderRadius: widthPixel(4),
  borderColor: '#FF1654',
  borderWidth: widthPixel(1),
  alignItems: 'center',
  justifyContent: 'center',
  display: 'inline-flex',
  textDecoration: 'none',
  ...mobileStyle({
    width: mobileWidthPixel(220),
    height: mobileHeightPixel(48),
    borderRadius: mobileWidthPixel(4)
  })
});

const Text = styled.span({
  fontSize: fontSize(16),
  color: '#ffffff',
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  '& svg': {
    strokeWidth: widthPixel(24),
    height: widthPixel(24)
  },
  ...mobileStyle({
    fontSize: mobileFontSize(16),
    '& svg': {
      strokeWidth: mobileWidthPixel(24),
      height: mobileWidthPixel(24)
    }
  })
});

const OutlinedContainer = styled(Link)({
  backgroundColor: '#FFFFFF',
  width: widthPixel(240),
  height: heightPixel(56),
  borderRadius: widthPixel(4),
  borderColor: '#FF1654',
  borderWidth: widthPixel(1),
  alignItems: 'center',
  justifyContent: 'center',
  display: 'inline-flex',
  textDecoration: 'none',
  ...mobileStyle({
    width: mobileWidthPixel(220),
    height: mobileHeightPixel(48),
    borderRadius: mobileWidthPixel(4)
  })
});

const OutlinedText = styled.span({
  fontSize: fontSize(16),
  color: '#FF1654',
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  '& svg': {
    strokeWidth: widthPixel(24),
    height: widthPixel(24)
  },
  ...mobileStyle({
    fontSize: mobileFontSize(16),
    '& svg': {
      strokeWidth: mobileWidthPixel(24),
      height: mobileWidthPixel(24)
    }
  })
});
