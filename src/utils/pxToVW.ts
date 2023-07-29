'use client';
import { CSSObject } from '@emotion/styled';

export const WIDTH = 1440;
export const HEIGHT = 924;

export const MOBILE_WIDTH = 414;
export const MOBILE_HEIGHT = 740;

export const widthPixel = (px: number, width = WIDTH) => {
  return `${(px / width) * 100}vw`;
};

export const heightPixel = (px: number, height = HEIGHT) => {
  return `${(px / height) * 100}vh`;
};

export const mobileWidthPixel = (px: number) => widthPixel(px, MOBILE_WIDTH);

export const mobileHeightPixel = (px: number) => heightPixel(px, MOBILE_HEIGHT);

export const fontSize = (px: number, width?: number) => widthPixel(px, width);

export const mobileFontSize = (px: number) => widthPixel(px, MOBILE_WIDTH);

export const lineheight = (px: number, height?: number) => heightPixel(px, height);

export const mobileStyle = (style: CSSObject) => {
  return { '@media(max-width: 480px)': style };
};
