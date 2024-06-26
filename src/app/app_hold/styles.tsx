'use client';
import { Button, NoLinkButton, OutlinedButton } from '@/components/buttons';
import { TextInput } from '@/components/inputs/textInput';
import {
  fontSize,
  heightPixel,
  mobileFontSize,
  mobileHeightPixel,
  mobileStyle,
  mobileWidthPixel,
  widthPixel
} from '@/utils/pxToVW';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Manrope, Raleway } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import QRCode from 'react-qr-code';

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
    height: mobileHeightPixel(868)
  }
});

const bounce = keyframes({
  from: {
    transform: `translate3d(0px, ${heightPixel(-90)} , 0px)`
  },
  '50%': {
    transform: `translate3d(0px, ${heightPixel(90)} , 0px)`
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
  '& #mobileTrusted': {
    display: 'none'
  },
  '@media(max-width: 480px)': {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'normal',
    justifyContent: 'space-between',
    height: mobileHeightPixel(552),
    borderBottomRightRadius: 0,
    '& #mobileTrusted': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginTop: mobileHeightPixel(42)
    }
  }
});

export const WhiteHalf = styled.div({
  height: heightPixel(824),
  width: '50%',
  '@media(max-width: 480px)': {
    width: '100%'
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
      fontSize: mobileFontSize(32),
      width: mobileWidthPixel(366),
      '& svg': {
        width: mobileWidthPixel(110)
      }
    }
  }
]);

export const StyledQRCode = styled(QRCode)({
  width: widthPixel(78.4),
  height: widthPixel(78.4),
  alignSelf: 'center'
});

export const ColoredText = styled.span({
  color: '#FF1453'
});

export const ChildrenContainer = styled.div({
  position: 'relative',
  width: '100%'
});

export const TextContentArea = styled.div({
  margin: `${heightPixel(168)} ${widthPixel(24)} ${heightPixel(
    120
  )} ${widthPixel(100)}`,
  '@media(max-width: 480px)': {
    margin: `${mobileHeightPixel(40)} ${mobileWidthPixel(24)}`
  }
});

export const TextWithSVG = styled.div({
  display: 'inline-block'
});

export const Line: React.FC = () => (
  <svg
    width={widthPixel(210)}
    height={heightPixel(8)}
    viewBox={`0 0 210 8`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Vector"
      d="M2 5.64611C28.1648 2.81791 94.7954 -1.0708 210 6"
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

export const RaleBase: React.FC<{
  className?: string;
  children: ReactNode;
}> = ({ className, children }) => (
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
    fontSize: mobileFontSize(12)
  })
]);

export const RaleText = styled(RaleBase)({
  color: '#515665',
  fontSize: fontSize(22),
  lineHeight: '160%',
  marginTop: heightPixel(24),
  '@media(max-width: 480px)': {
    fontSize: mobileFontSize(16),
    width: mobileWidthPixel(366)
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
    marginTop: mobileHeightPixel(24),
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
  alignItems: 'center',
  marginTop: heightPixel(64)
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
    width: mobileWidthPixel(414),
    height: mobileHeightPixel(414)
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
    margin: `${heightPixel(0)} ${widthPixel(24)} ${heightPixel(
      40
    )} ${widthPixel(100)}`
  },
  mobileStyle({
    margin: `${mobileHeightPixel(40)} ${mobileWidthPixel(24)}`,
    display: 'none'
  })
]);

export const BlueBackground = styled.section({
  padding: `${heightPixel(100)} ${widthPixel(80)}`,
  width: '100%',
  display: 'flex',
  backgroundColor: '#002466',
  alignItems: 'center',
  justifyContent: 'center',
  ...mobileStyle({
    padding: `${mobileHeightPixel(100)} ${mobileWidthPixel(24)}`
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
    width: mobileWidthPixel(414),
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
    gap: mobileHeightPixel(24),
    width: mobileWidthPixel(414)
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
    minWidth: mobileWidthPixel(351),
    fontSize: mobileFontSize(24)
  })
]);

export const RaleTextWhite = styled(RaleText)({
  color: '#ffffff',
  textAlign: 'center',
  width: widthPixel(440),
  fontSize: fontSize(24),
  ...mobileStyle({
    width: mobileWidthPixel(316),
    margin: '0px',
    fontSize: mobileFontSize(16)
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
    borderTopRightRadius: mobileWidthPixel(0)
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
    padding: `${mobileHeightPixel(40)} ${mobileWidthPixel(24)}`
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
    width: heightPixel(404),
    height: heightPixel(640),
    position: 'absolute',
    objectFit: 'contain',
    objectPosition: 'center'
  },
  ...mobileStyle({
    width: '100%',
    '& img': {
      width: mobileHeightPixel(233.88),
      height: mobileHeightPixel(450.38),
      position: 'absolute',
      objectFit: 'cover',
      objectPosition: 'center'
    }
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
  ...mobileStyle({
    width: mobileHeightPixel(370),
    height: mobileHeightPixel(370)
  })
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
  },
  ...mobileStyle({
    '& img': {
      width: mobileWidthPixel(16),
      height: mobileHeightPixel(24)
    }
  })
});

export const SmallboldText = styled(RaleText)([rale600.style]);

export const SmallMultiStyleText = styled(MultiStyleText)({
  fontSize: fontSize(32),
  ...mobileStyle({
    fontSize: mobileFontSize(24),
    width: mobileWidthPixel(366)
  })
});

export const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
  >
    <path
      d="M12.5 4L11.09 5.41L16.67 11H4.5V13H16.67L11.09 18.59L12.5 20L20.5 12L12.5 4Z"
      fill="white"
    />
  </svg>
);

export const Page404 = styled.div({
  height: heightPixel(824),
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  background:
    'linear-gradient(163deg, #FFEBF0 0%, #FFF8EB 99.99%, #FFF8EB 100%)',
  '& img': {
    height: heightPixel(506),
    width: widthPixel(480)
  },
  ...mobileStyle({
    flexDirection: 'column',
    justifyContent: 'center',
    '& img': {
      height: heightPixel(317),
      width: widthPixel(300)
    }
  })
});

export const SideLeft404 = styled.div({
  paddingLeft: widthPixel(100),
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: heightPixel(40),
  width: widthPixel(596),
  ...mobileStyle({
    justifyContent: 'center',
    alignItems: 'center',
    padding: `${heightPixel(40)} ${widthPixel(24)}`
  })
});

export const View = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  ...mobileStyle({
    flexDirection: 'column',
    height: mobileHeightPixel(824)
  })
});

export const DownloadImage = styled(Image)({
  width: widthPixel(720),
  height: heightPixel(824),
  objectFit: 'contain',
  ...mobileStyle({
    width: mobileWidthPixel(720),
    height: mobileHeightPixel(824)
  })
});

export const Left = styled.div({
  paddingLeft: widthPixel(80)
});

// Delete Section

export const DeleteView = styled.section({
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f9f9f9',
  padding: `${heightPixel(50)} 0`,
  ...mobileStyle({
    width: '100%',
    height: '100%',
    padding: `0`
  })
});

export const DeleteCard = styled.div({
  display: 'flex',
  flexDirection: 'row',
  boxShadow: `rgba(0, 0, 0, 0.24) 0px ${widthPixel(3)} ${heightPixel(8)}`,
  borderRadius: widthPixel(16),
  ...mobileStyle({
    flexDirection: 'column'
  })
});

export const LeftCard = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: heightPixel(20),
  width: widthPixel(400),
  borderTopLeftRadius: widthPixel(16),
  borderBottomLeftRadius: widthPixel(16),
  backgroundColor: '#FF1654df',
  padding: `${heightPixel(32)} ${widthPixel(32)}`,
  justifyContent: 'center',
  ...mobileStyle({
    width: '100%',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  })
}));

export const RightCard = styled.form(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: heightPixel(20),
  width: widthPixel(600),
  minHeight: heightPixel(500),
  borderTopRightRadius: widthPixel(16),
  borderBottomRightRadius: widthPixel(16),
  backgroundColor: '#FFFFFF',
  padding: `${heightPixel(32)} ${widthPixel(32)}`,
  justifyContent: 'center',
  ...mobileStyle({
    width: '100%',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    padding: `${mobileHeightPixel(32)} ${mobileWidthPixel(32)}`
  })
}));

export const DeleteManText = styled.h2([
  rale600.style,
  {
    fontSize: fontSize(22),
    color: '#ffffff'
  },
  mobileStyle({
    fontSize: mobileFontSize(16)
  })
]);

export const DeleteSmallText = styled.p([
  man.style,
  {
    fontSize: fontSize(16),
    color: '#ffffff'
  },
  mobileStyle({
    fontSize: mobileFontSize(12)
  })
]);

export const Input = styled(TextInput)({
  width: widthPixel(490),
  ...mobileStyle({
    width: '100%'
  })
});

export const Actions = styled(SB)({
  marginTop: heightPixel(20),
  ...mobileStyle({
    flexDirection: 'column-reverse',
    rowGap: mobileHeightPixel(15)
  })
});

export const Checkbox = styled.input({});

export const DeleteButton = styled(NoLinkButton)(
  mobileStyle({
    width: '100%'
  })
);

export const CancelButton = styled(OutlinedButton)(
  mobileStyle({
    width: '100%',
    border: 0
  })
);
