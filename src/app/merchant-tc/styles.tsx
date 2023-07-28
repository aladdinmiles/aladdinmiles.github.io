'use client';
import { heightPixel, widthPixel } from '@/utils/pxToVW';
import styled from '@emotion/styled';

export const ColoredSection = styled.section`
  display: flex;
  height: ${heightPixel(434)};
  padding: ${heightPixel(88.5)} ${widthPixel(100)};
  justify-content: center;
  align-items: center;
  background: linear-gradient(163deg, #ffebf0 0%, #fff8eb 100%);
`;

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
