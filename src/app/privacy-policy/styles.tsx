'use client';
import { fontSize, heightPixel, mobileFontSize, mobileStyle, widthPixel } from '@/utils/pxToVW';
import styled from '@emotion/styled';
import { Raleway } from 'next/font/google';

export const ColoredSection = styled.section([
  `
  display: flex;
  height: ${heightPixel(434)};
  padding: ${heightPixel(88.5)} ${widthPixel(100)};
  justify-content: center;
  align-items: center;
  background: linear-gradient(163deg, #ffebf0 0%, #fff8eb 100%);
`,
  mobileStyle({
    padding: `${heightPixel(40)} ${widthPixel(24)}`
  })
]);

export const HeroContent = styled.div([
  `
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${heightPixel(40)};
  width: ${widthPixel(560)};
`,
  mobileStyle({})
]);

export const HeroContentTextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${heightPixel(16)};
`;

const rale700 = Raleway({
  weight: '700',
  subsets: ['latin']
});

export const MultiStyleText = styled.h1([
  rale700.style,
  {
    fontSize: fontSize(32),
    color: '#1D2029'
  },
  mobileStyle({
    fontSize: mobileFontSize(24)
  })
]);
