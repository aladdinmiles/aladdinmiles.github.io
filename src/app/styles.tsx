'use client';
import { fontSize, heightPixel, mobileStyle, widthPixel } from '@/utils/pxToVW';
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
  flexDirection: 'row',
  '@media(max-width: 480px)': {
    flexDirection: 'column',
    background: '#FFF5F8',
    minHeight: heightPixel(1024)
  }
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

const mobile_bounce = keyframes({
  from: {
    transform: `translate3d(0px, ${heightPixel(-40)} , 0px)`
  },
  '50%': {
    transform: `translate3d(0px, ${heightPixel(40)} , 0px)`
  },
  '90%': {
    transform: `translate3d(0px, ${heightPixel(-50)} , 0px)`
  },
  to: {
    transform: `translate3d(0px, ${heightPixel(-40)} , 0px)`
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
  '@media(max-width: 480px)': {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'normal',
    justifyContent: 'space-between',
    '& #mobileTrusted': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginTop: heightPixel(42)
    }
  }
});

export const WhiteHalf = styled.div({
  height: heightPixel(824),
  width: '50%',
  '@media(max-width: 480px)': {
    width: '100%',
    flexDirection: 'row'
  }
});

const rale700 = Raleway({
  weight: '700',
  subsets: ['latin']
});

export const MultiStyleText = styled.h1([
  rale700.style,
  {
    fontSize: fontSize(44),
    color: '#1D2029',
    '@media(max-width: 480px)': {
      fontSize: fontSize(32),
      width: widthPixel(366),
      '& svg': {
        width: widthPixel(110)
      }
    }
  }
]);

export const ColoredText = styled.span({
  color: '#FF1453'
});

export const TextContentArea = styled.div({
  margin: `${heightPixel(168)} ${widthPixel(24)} ${heightPixel(120)} ${widthPixel(100)}`,
  '@media(max-width: 480px)': {
    margin: `${heightPixel(40)} ${widthPixel(24)}`
  }
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
      strokeWidth="4"
      strokeLinecap="round"
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
  },
  mobileStyle({
    fontSize: fontSize(12)
  })
]);

export const RaleText = styled(RaleBase)({
  color: '#515665',
  fontSize: fontSize(22),
  lineHeight: '160%',
  '@media(max-width: 480px)': {
    fontSize: fontSize(16),
    width: widthPixel(366)
  }
});

export const AppDownloadArea = styled.div([
  {
    display: 'flex',
    flexDirection: 'row',
    gap: widthPixel(24),
    alignItems: 'center',
    marginTop: heightPixel(40)
  },
  mobileStyle({
    marginTop: heightPixel(24),
    '& .scanText': {
      display: 'none'
    }
  })
]);

export const QRCodeBackground = styled.div([
  {
    width: widthPixel(140),
    height: widthPixel(140),
    borderRadius: widthPixel(140),
    alignItems: 'center',
    justifyContent: 'center',
    background: '#FF3251',
    display: 'flex'
  },
  mobileStyle({
    display: 'none'
  })
]);

export const ButtonContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: widthPixel(10),
  alignItems: 'center'
});

export const StoreButtons = styled(Link)({});

export const HeroImage = styled(Image)([
  {
    width: widthPixel(600),
    height: heightPixel(600),
    objectFit: 'contain',
    alignSelf: 'center',
    objectPosition: 'center',
    animation: `${bounce} 5s ease infinite`,
    ...mobileStyle({
      animation: `${mobile_bounce} 5s ease infinite`
    })
  },
  mobileStyle({
    width: widthPixel(414),
    height: widthPixel(414)
  })
]);

export const Partners = styled.div([
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: widthPixel(16)
  },
  mobileStyle({
    '& img': {}
  })
]);

export const Trusted = styled.div([
  {
    margin: `${heightPixel(0)} ${widthPixel(24)} ${heightPixel(40)} ${widthPixel(100)}`
  },
  mobileStyle({
    margin: `${heightPixel(40)} ${widthPixel(24)}`,
    display: 'none'
  })
]);

export const BlueBackground = styled.section({
  padding: `${heightPixel(100)} ${widthPixel(80)}`,
  width: '100%',
  backgroundColor: '#002466',
  alignItems: 'center',
  justifyContent: 'center',
  ...mobileStyle({
    padding: `${heightPixel(100)} ${widthPixel(24)}`
  })
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
  backgroundPosition: 'center',
  ...mobileStyle({
    width: widthPixel(414),
    backgroundSize: 'scale-down'
  })
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
  borderBottomRightRadius: widthPixel(178),
  ...mobileStyle({
    gap: heightPixel(24)
  })
});

export const DownloadHeader = styled(RaleText)([
  rale600.style,
  {
    color: '#ffffff',
    fontSize: fontSize(32),
    textAlign: 'center'
  },
  mobileStyle({
    width: widthPixel(316)
  })
]);

export const RaleTextWhite = styled(RaleText)({
  color: '#ffffff',
  textAlign: 'center',
  width: widthPixel(440),
  fontSize: fontSize(24),
  ...mobileStyle({
    width: widthPixel(316),
    margin: '0px',
    fontSize: fontSize(16)
  })
});

export const PinkBackground = styled.section({
  backgroundColor: '#FFF5F8',
  borderTopRightRadius: widthPixel(160),
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  ...mobileStyle({
    flexDirection: 'column',
    borderTopRightRadius: widthPixel(0)
  })
});

export const StartShoppingAreaLeft = styled.div({
  width: '50%',
  padding: `${heightPixel(162)} ${widthPixel(80)} ${heightPixel(92)}`,
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: heightPixel(40),
  ...mobileStyle({
    padding: `${heightPixel(40)} ${widthPixel(24)}`,
    '& h1': {
      fontSize: fontSize(24)
    }
  })
});

export const StartShoppingAreaRight = styled.div({
  width: '50%',
  padding: `${heightPixel(92)} ${widthPixel(80)}`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '& img': {
    width: widthPixel(404),
    height: heightPixel(640),
    position: 'absolute',
    objectFit: 'contain',
    objectPosition: 'center'
  },
  ...mobileStyle({
    width: '100%'
  })
});

export const BigCircle = styled.div({
  borderRadius: widthPixel(560),
  backgroundColor: '#FF80A1',
  backdropFilter: `blur(${widthPixel(43.75)})`,
  width: heightPixel(560),
  height: heightPixel(560),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...mobileStyle({})
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

export const Arrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path d="M12.5 4L11.09 5.41L16.67 11H4.5V13H16.67L11.09 18.59L12.5 20L20.5 12L12.5 4Z" fill="white" />
  </svg>
);

export const Page404 = styled.div({
  height: heightPixel(520),
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  display: 'flex'
});
