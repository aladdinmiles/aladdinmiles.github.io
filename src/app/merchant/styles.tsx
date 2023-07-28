'use client';
import { heightPixel, widthPixel } from '@/utils/pxToVW';
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
  }
});

export const HeroContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: ${widthPixel(560)};
`;

export const HeroContentTextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

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
  }
});
