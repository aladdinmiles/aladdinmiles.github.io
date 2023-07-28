'use client';
import { heightPixel, widthPixel } from '@/utils/pxToVW';
import styled from '@emotion/styled';
import { MultiStyleText, RaleText } from '../styles';

export const HeroSection = styled.section({
  backgroundColor: '#FFF5F8',
  padding: `${heightPixel(60)} ${widthPixel(100)}`,
  justifyContent: 'space-between',
  display: 'flex',
  alignItems: 'center'
});

export const HeroLeft = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: heightPixel(16),
  width: widthPixel(560)
});

export const HeroRight = styled.div({
  display: 'flex',
  gap: widthPixel(24),
  '& .phone': {
    width: widthPixel(300),
    height: heightPixel(600),
    objectFit: 'cover',
    objectPosition: 'center'
  }
});

export const BoxArea = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: heightPixel(20)
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
    objectPosition: 'center'
  }
});

export const HistoryContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

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
  }
});

export const JoinUsContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

export const JoinUsContentTextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const JoinUsHeader = styled(MultiStyleText)({
  color: '#ffffff',
  width: widthPixel(711)
});

export const RaleTextWhite = styled(RaleText)({
  color: '#ffffff',
  textAlign: 'center',
  width: widthPixel(560),
  textAlign: 'left'
});
