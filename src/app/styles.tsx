'use client';
import { fontSize, heightPixel, widthPixel } from '@/utils/pxToVW';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Manrope, Raleway } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

export const MainView = styled.div({
  width: '100%',
  minHeight: '100%',
  backgroundColor: '#ffffff'
});

export const ContentView = styled.div({ width: '100%' });

export const HeroSection = styled.section({
  height: heightPixel(824),
  width: '100%',
  display: 'flex',
  flexDirection: 'row'
});

const bounce = keyframes({
  from: {
    transform: `translate3d(0px, ${heightPixel(-90)} , 0px)`
  },
  '50%': {
    transform: `translate3d(0px, ${heightPixel(90)} , 0px)`
  },
  '90%': {
    transform: `translate3d(0px, ${heightPixel(-100)} , 0px)`
  },
  to: {
    transform: `translate3d(0px, ${heightPixel(-90)} , 0px)`
  }
});

export const ColoredHalf = styled.div({
  height: heightPixel(824),
  width: '50%',
  background: '#FFF5F8',
  borderBottomRightRadius: widthPixel(160),
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  '& img': {
    animation: `${bounce} 5s ease infinite`
  }
});

export const WhiteHalf = styled.div({
  height: heightPixel(824),
  width: '50%'
});

export const MultiStyleText = styled.h1({
  fontSize: fontSize(44),
  color: '#1D2029'
});

export const ColoredText = styled.span({
  color: '#FF1453'
});

export const TextContentArea = styled.div({
  margin: `${heightPixel(168)} ${widthPixel(24)} ${heightPixel(120)} ${widthPixel(100)}`
});

export const TextWithSVG = styled.div({
  display: 'inline-block'
});

export const Line: React.FC = () => (
  <svg
    width={widthPixel(154)}
    height={heightPixel(8)}
    viewBox={`0 0 154 8`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Vector"
      d="M2 5.64611C28.1648 2.81791 94.7954 -1.0708 152 6"
      stroke="#FF1F7D"
      stroke-width="4"
      stroke-linecap="round"
    />
  </svg>
);

const man = Manrope({
  weight: '400',
  subsets: ['latin', 'cyrillic']
});

const rale = Raleway({
  weight: '400',
  subsets: ['latin', 'cyrillic']
});

const rale600 = Raleway({
  weight: '600',
  subsets: ['latin', 'cyrillic']
});

export const RaleBase: React.FC<{ className?: string; children: ReactNode }> = ({ className, children }) => (
  <p className={`${rale.className} ${className}`}>{children}</p>
);

export const ManText = styled.p([
  man.style,
  {
    fontSize: fontSize(16),
    color: '#1D2029',
    textTransform: 'uppercase',
    lineHeight: '150%'
  }
]);

export const RaleText = styled(RaleBase)({
  color: '#515665',
  fontSize: fontSize(22),
  lineHeight: '160%'
});

export const AppDownloadArea = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: widthPixel(24),
  alignItems: 'center',
  marginTop: heightPixel(40)
});

export const QRCodeBackground = styled.div({
  width: widthPixel(140),
  height: widthPixel(140),
  borderRadius: widthPixel(140),
  alignItems: 'center',
  justifyContent: 'center',
  background: '#FF3251'
});

export const ButtonContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: widthPixel(10),
  alignItems: 'center'
});

export const StoreButtons = styled(Link)({});

export const HeroImage = styled(Image)({
  width: widthPixel(600),
  height: heightPixel(600),
  objectFit: 'contain',
  alignSelf: 'center',
  objectPosition: 'center'
});

export const Partners = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: widthPixel(16)
});

export const Trusted = styled.div({
  margin: `${heightPixel(0)} ${widthPixel(24)} ${heightPixel(40)} ${widthPixel(100)}`
});

export const BlueBackground = styled.section({
  padding: `${heightPixel(100)} ${widthPixel(80)}`,
  width: '100%',
  backgroundColor: '#002466',
  alignItems: 'center',
  justifyContent: 'center'
});

export const AppDownload = styled.div({
  background: `url(/images/dotBg.png), no-repeat`,
  width: widthPixel(1280),
  height: heightPixel(480),
  display: 'flex',
  backgroundSize: 'cover',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
});

export const DownloadContent = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: heightPixel(40),
  width: widthPixel(1220),
  height: '100%',
  backgroundColor: '#00000012',
  borderTopLeftRadius: widthPixel(178),
  borderBottomRightRadius: widthPixel(178)
});

export const DownloadHeader = styled(RaleText)([
  rale600.style,
  {
    color: '#ffffff',
    fontSize: fontSize(32)
  }
]);

export const RaleTextWhite = styled(RaleText)({
  color: '#ffffff',
  textAlign: 'center',
  width: widthPixel(440),
  fontSize: fontSize(24)
});

export const PinkBackground = styled.section({
  backgroundColor: '#FFF5F8',
  borderTopRightRadius: widthPixel(160),
  width: '100%',
  display: 'flex',
  flexDirection: 'row'
});

export const StartShoppingAreaLeft = styled.div({
  width: '50%',
  padding: `${heightPixel(162)} ${widthPixel(80)} ${heightPixel(92)}`,
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: heightPixel(40)
});

export const StartShoppingAreaRight = styled.div({
  width: '50%',
  padding: `${heightPixel(92)} ${widthPixel(80)}`,
  position: 'relative',
  '& img': {
    width: widthPixel(404),
    height: heightPixel(640),
    position: 'absolute',
    top: heightPixel(60),
    right: widthPixel(195),
    objectFit: 'contain',
    objectPosition: 'center'
  }
});

export const BigCircle = styled.div({
  borderRadius: widthPixel(560),
  backgroundColor: '#FF80A1',
  backdropFilter: `blur(${widthPixel(43.75)})`,
  width: heightPixel(560),
  height: heightPixel(560),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const SB = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  gap: widthPixel(16),
  '& img': {
    width: widthPixel(32),
    height: heightPixel(48),
    objectFit: 'contain',
    objectPosition: 'center'
  }
});

export const SmallboldText = styled(RaleText)([rale600.style]);

export const SmallMultiStyleText = styled(MultiStyleText)({
  fontSize: fontSize(32)
});
