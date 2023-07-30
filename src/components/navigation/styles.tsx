'use client';
import { RaleText } from '@/app/styles';
import {
  heightPixel,
  mobileHeightPixel,
  mobileStyle,
  mobileWidthPixel,
  widthPixel
} from '@/utils/pxToVW';
import styled from '@emotion/styled';
import Link from 'next/link';

export const Wrapper = styled.div({
  width: '100%',
  '& #mobile': {
    display: 'none'
  },
  ...mobileStyle({
    '& #mobile': {
      display: 'flex'
    },
    '& #large': {
      display: 'none'
    }
  })
});

export const NavBar = styled.div({
  width: '100%',
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${heightPixel(22)} ${widthPixel(100)}`,
  ...mobileStyle({
    height: mobileHeightPixel(60),
    padding: `${mobileHeightPixel(16)} ${mobileWidthPixel(14)}`
  })
});

export const LogoArea = styled(Link)({
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
  },
  ...mobileStyle({
    '& .actualLogo': {
      width: mobileWidthPixel(32),
      height: mobileHeightPixel(22.756),
      objectFit: 'cover',
      objectPosition: 'center'
    },
    '& .logo-text': {
      width: mobileWidthPixel(113),
      height: mobileHeightPixel(32),
      objectFit: 'contain'
    }
  })
});

export const MobileWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#ffffff',
  position: 'relative'
});

export const MenuAction = styled.button({
  textDecoration: 'none',
  width: mobileWidthPixel(50),
  height: mobileHeightPixel(50),
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent'
});

export const DropDownView = styled.div({
  width: '100%',
  minHeight: mobileHeightPixel(740),
  padding: `${mobileHeightPixel(40)} ${mobileWidthPixel(24)}`,
  position: 'absolute',
  zIndex: 100,
  top: mobileHeightPixel(60),
  backgroundColor: '#ffffff',
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: mobileHeightPixel(40)
});

export const MobileLink = styled(RaleText.withComponent(Link))({
  width: mobileWidthPixel(158)
});
