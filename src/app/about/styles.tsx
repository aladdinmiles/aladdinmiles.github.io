'use client';
import {
  heightPixel,
  mobileFontSize,
  mobileHeightPixel,
  mobileStyle,
  mobileWidthPixel,
  widthPixel
} from '@/utils/pxToVW';
import styled from '@emotion/styled';
import { MultiStyleText, RaleText } from '../styles';

export const HeroSection = styled.section({
  backgroundColor: '#FFF5F8',
  padding: `${heightPixel(60)} ${widthPixel(100)}`,
  justifyContent: 'space-between',
  display: 'flex',
  alignItems: 'center',
  ...mobileStyle({
    flexDirection: 'column',
    padding: `${mobileHeightPixel(40)} ${mobileWidthPixel(24)}`,
    justifyContent: 'center'
  })
});

export const HeroLeft = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: heightPixel(16),
  width: widthPixel(560),
  ...mobileStyle({
    width: '100%',
    alignItems: 'center',
    textAlign: 'center'
  })
});

export const HeroRight = styled.div({
  display: 'flex',
  gap: widthPixel(24),
  '& .phone': {
    width: widthPixel(300),
    height: heightPixel(600),
    objectFit: 'cover',
    objectPosition: 'center'
  },
  ...mobileStyle({
    '& .phone': {
      width: mobileWidthPixel(300),
      height: mobileHeightPixel(600),
      objectFit: 'cover',
      objectPosition: 'center'
    }
  })
});

export const BoxArea = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: heightPixel(20),
  ...mobileStyle({
    display: 'none'
  })
});

export const PinkBox = styled.div({
  width: widthPixel(300),
  height: heightPixel(290),
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FEE6F9',
  borderRadius: widthPixel(16),
  '& img': {
    width: widthPixel(160),
    height: widthPixel(160),
    objectFit: 'cover',
    objectPosition: 'center'
  }
});

export const BlueBox = styled.div({
  width: widthPixel(300),
  height: heightPixel(290),
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#9CBEFC',
  borderRadius: widthPixel(16),
  '& img': {
    width: widthPixel(160),
    height: widthPixel(160),
    objectFit: 'cover',
    objectPosition: 'center'
  }
});

export const HistorySection = styled.div({
  backgroundColor: '#EBF2FF',
  display: 'flex',
  flexDirection: 'row',
  gap: widthPixel(40),
  padding: `${heightPixel(100)} ${widthPixel(80)}`,
  alignItems: 'center',
  '& img': {
    width: widthPixel(600),
    height: widthPixel(500),
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: widthPixel(16)
  },
  ...mobileStyle({
    flexDirection: 'column-reverse',
    gap: mobileHeightPixel(24),
    '& img': {
      width: mobileWidthPixel(366),
      height: mobileHeightPixel(240),
      objectFit: 'cover',
      objectPosition: 'center',
      borderRadius: mobileWidthPixel(8)
    },
    padding: `${mobileHeightPixel(40)} ${mobileWidthPixel(24)}`,
    '& h1': {
      fontSize: mobileWidthPixel(24)
    }
  })
});

export const HistoryHeaderSection = styled.div({
  ...mobileStyle({
    gap: mobileHeightPixel(24)
  })
});

export const HistoryContent = styled.div([
  `
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${heightPixel(24)};
`,
  mobileStyle({
    gap: mobileHeightPixel(24)
  })
]);

export const JoinUs = styled.section({
  background: 'url(/images/blueBg.png), no-repeat',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  padding: `${heightPixel(157)} ${widthPixel(100)}`,
  minHeight: heightPixel(760),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  '& img': {
    width: widthPixel(400),
    height: widthPixel(480),
    objectFit: 'cover',
    objectPosition: 'center'
  },
  ...mobileStyle({
    '& img': {
      display: 'none'
    },
    padding: `${mobileHeightPixel(40)} ${mobileWidthPixel(24)}`
  })
});

export const JoinUsContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${heightPixel(40)};
`;

export const JoinUsContentTextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${heightPixel(16)};
`;

export const JoinUsHeader = styled(MultiStyleText)({
  color: '#ffffff',
  width: widthPixel(711),
  ...mobileStyle({
    fontSize: mobileFontSize(24)
  })
});

export const RaleTextWhite = styled(RaleText)({
  color: '#ffffff',
  width: widthPixel(560),
  textAlign: 'left',
  ...mobileStyle({
    fontSize: mobileFontSize(16)
  })
});
