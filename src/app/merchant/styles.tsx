'use client';
import { heightPixel, mobileHeightPixel, mobileStyle, mobileWidthPixel, widthPixel } from '@/utils/pxToVW';
import styled from '@emotion/styled';

export const HeroSection = styled.div({
  backgroundColor: '#FFF5F8',
  display: 'flex',
  flexDirection: 'row',
  padding: `${heightPixel(100)} ${widthPixel(80)}`,
  alignItems: 'center',
  justifyContent: 'space-between',
  '& img': {
    width: widthPixel(616),
    height: widthPixel(600),
    objectFit: 'cover',
    objectPosition: 'center'
  },
  ...mobileStyle({
    flexDirection: 'column',
    padding: `${mobileHeightPixel(40)} ${mobileWidthPixel(24)}`,
    alignItems: 'flex-start',
    textAlign: 'center',
    gap: mobileHeightPixel(40),
    '& img': {
      width: mobileWidthPixel(414),
      height: mobileWidthPixel(404),
      objectFit: 'cover',
      objectPosition: 'center'
    }
  })
});

export const HeroContent = styled.div([
  `
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${heightPixel(40)};
  width: ${widthPixel(560)};
`,
  mobileStyle({
    alignItems: 'center',
    width: '100%'
  })
]);

export const HeroContentTextArea = styled.div([
  `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${heightPixel(16)};
`,
  mobileStyle({
    '& .small': {
      textAlign: 'center',
      width: '100%'
    }
  })
]);

export const BottomSection = styled.div({
  backgroundColor: '#FFFFFF',
  display: 'flex',
  flexDirection: 'row',
  padding: `${heightPixel(81)} ${widthPixel(80)} ${heightPixel(79)}`,
  alignItems: 'center',
  gap: widthPixel(54),
  justifyContent: 'space-between',
  '& img': {
    width: widthPixel(586),
    height: widthPixel(600),
    objectFit: 'cover',
    objectPosition: 'center'
  },
  ...mobileStyle({
    backgroundColor: '#EBF2FF',
    flexDirection: 'column-reverse',
    padding: `${mobileHeightPixel(40)} ${mobileWidthPixel(24)}`,
    alignItems: 'flex-start',
    textAlign: 'center',
    gap: mobileHeightPixel(40),
    '& img': {
      width: mobileWidthPixel(414),
      height: mobileWidthPixel(404),
      objectFit: 'cover',
      objectPosition: 'center'
    }
  })
});
