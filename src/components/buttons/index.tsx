'use client';

import { fontSize, heightPixel, widthPixel } from '@/utils/pxToVW';
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

export const Button: React.FC<Props> = ({ children, href = '/#' }) => {
  return (
    <Container href={href}>
      <Text className={man.className}>{children}</Text>
    </Container>
  );
};

const Container = styled(Link)({
  backgroundColor: '#FF1654',
  width: widthPixel(240),
  height: heightPixel(56),
  borderRadius: widthPixel(4),
  alignItems: 'center',
  justifyContent: 'center',
  display: 'inline-flex'
});

const Text = styled.span({
  fontSize: fontSize(16),
  color: '#ffffff'
});