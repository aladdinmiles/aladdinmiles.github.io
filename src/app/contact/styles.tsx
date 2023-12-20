'use client';
import { Button } from '@/components/buttons';
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
import { MultiStyleText } from '../styles';
export const Background = styled.div([
  {
    background: 'linear-gradient(107deg, #FFEBF0 -16.65%, #FFF8EB 106.72%)',
    padding: `${heightPixel(80)} 0`,
    justifyContent: 'center',
    display: 'flex'
  }
]);

export const Form = styled.div({
  width: widthPixel(720),
  gap: `${heightPixel(40)} 0`,
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  ...mobileStyle({
    width: '100%',
    padding: `0 ${mobileWidthPixel(40)}`,
    alignItems: 'center'
  })
});

const man600 = Manrope({
  weight: '600',
  subsets: ['latin']
});

const man400 = Manrope({
  weight: '400',
  subsets: ['latin']
});

export const GetHelp = styled.p([
  man600.style,
  {
    fontSize: fontSize(14),
    color: '#FF1654',
    textAlign: 'center'
  },
  mobileStyle({
    fontSize: mobileFontSize(24)
  })
]);

export const SubHeader = styled.p([
  man400.style,
  {
    fontSize: fontSize(14),
    color: '#515665',
    textAlign: 'center'
  },
  mobileStyle({
    fontSize: mobileFontSize(14)
  })
]);

export const Header = styled(MultiStyleText)({
  color: '#1D2029',
  width: widthPixel(711),
  fontSize: fontSize(32),
  textAlign: 'center',
  ...mobileStyle({
    fontSize: mobileFontSize(24)
  })
});

export const SideBySide = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  columnGap: widthPixel(16),
  ...mobileStyle({
    width: '100%',
    flexDirection: 'column',
    rowGap: mobileHeightPixel(24),
    columnGap: 0
  })
});

export const Label = styled.p([
  man400.style,
  {
    fontSize: fontSize(14),
    color: '#515665',
    textAlign: 'center'
  },
  mobileStyle({
    fontSize: mobileFontSize(14)
  })
]);

export const InputWrapper = styled.div([
  {
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '50%'
  },
  mobileStyle({
    width: '100%'
  })
]);

export const Submit = styled(Button)([
  {
    width: widthPixel(720)
  },
  mobileStyle({
    width: '100%'
  })
]);

export const TwentyFour = styled.div([
  {
    display: 'flex',
    flexDirection: 'column',
    rowGap: widthPixel(24)
  },
  mobileStyle({
    rowGap: mobileHeightPixel(24),
    width: '100%'
  })
]);

export const Img = styled(Image)({
  width: widthPixel(240),
  height: widthPixel(240),
  alignSelf: 'center',
  ...mobileStyle({
    width: mobileWidthPixel(240),
    height: mobileWidthPixel(240)
  })
});
