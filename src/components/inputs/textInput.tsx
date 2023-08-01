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

const man = Manrope({
  subsets: ['latin', 'cyrillic']
});

export const TextInput = styled.input({
  width: '100%',
  height: heightPixel(56),
  fontSize: fontSize(14),
  border: `${widthPixel(1)} solid #B2B7C2`,
  borderRadius: widthPixel(8),
  padding: `${heightPixel(8)} ${widthPixel(16)}`,
  ...man.style,
  ...mobileStyle({
    padding: `${mobileHeightPixel(8)} ${mobileWidthPixel(16)}`,
    fontSize: mobileFontSize(14),
    borderRadius: mobileWidthPixel(8)
  })
});
