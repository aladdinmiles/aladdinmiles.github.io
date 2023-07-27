'use client';
import { heightPixel, widthPixel } from '@/utils/pxToVW';
import styled from '@emotion/styled';

export const NavBar = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${heightPixel(22)} ${widthPixel(100)}`
});

export const LogoArea = styled.h3({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  '& .actualLogo': {
    width: widthPixel(45),
    height: heightPixel(32),
    objectFit: 'cover',
    objectPosition: 'center'
  },
  '& .logo-text': {
    width: widthPixel(160),
    height: heightPixel(45),
    objectFit: 'contain'
  }
});
