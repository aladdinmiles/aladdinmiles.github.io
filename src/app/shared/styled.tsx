'use client';
import { fontSize, heightPixel, widthPixel } from '@/utils/pxToVW';
import styled from '@emotion/styled';
import { Manrope, Raleway } from 'next/font/google';
import { RaleText } from '../styles';

export const Wrapper = styled.section({
  width: '100%',
  padding: `${heightPixel(95)} ${widthPixel(135)}`,
  flexDirection: 'column',
  display: 'flex',
  gap: heightPixel(50)
});

const man = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: '600'
});

const rale = Raleway({
  weight: '600',
  subsets: ['latin', 'cyrillic']
});

export const SmallerHeader = styled.p([
  man.style,
  {
    fontSize: fontSize(16),
    color: '#FF1654',
    textTransform: 'uppercase',
    lineHeight: '150%'
  }
]);

export const Header = styled.p([
  man.style,
  {
    fontSize: fontSize(32),
    color: '#1D2029',
    lineHeight: '150%'
  }
]);

export const HeaderSection = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
});

export const ItemRows = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  padding: 0,
  gap: widthPixel(24)
});

export const ContentArea = styled.div({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: heightPixel(24),
  padding: '0px'
});

const getStyle = (index: number) => {
  switch (index) {
    case 0:
      return {
        backgroundColor: '#D9FFE8',
        '&:hover': {
          backgroundColor: '#194C2E',
          '& p': {
            color: '#ffffff'
          }
        }
      };
    case 1:
      return {
        backgroundColor: '#FFE5EC',
        '&:hover': {
          backgroundColor: '#5C0A20',
          '& p': {
            color: '#ffffff'
          }
        }
      };
    case 2:
      return {
        backgroundColor: '#FFF0E5',
        '&:hover': {
          backgroundColor: '#662B00',
          '& p': {
            color: '#ffffff'
          }
        }
      };
    case 3:
      return {
        backgroundColor: '#EBF2FF',
        '&:hover': {
          backgroundColor: '#0A275C',
          '& p': {
            color: '#ffffff'
          }
        }
      };
  }
};

export const Card = styled.div<{ index: number }>(({ index }) => [
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: widthPixel(572),
    padding: `${heightPixel(69)} ${widthPixel(40)}`,
    borderRadius: widthPixel(16),
    height: heightPixel(240),
    gap: widthPixel(24),
    '& img': {
      width: widthPixel(120),
      height: widthPixel(120),
      objectFit: 'cover',
      objectPosition: 'center'
    }
  },
  getStyle(index)
]);

export const CardContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: heightPixel(12),
  width: widthPixel(329)
});

export const Text = styled(RaleText)({
  fontSize: fontSize(22)
});

export const CardHeader = styled(RaleText)([
  rale.style,
  {
    color: '#1D2029'
  }
]);
