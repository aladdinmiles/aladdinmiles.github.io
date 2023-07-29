'use client';
import { CSSObject } from '@emotion/styled';

export const WIDTH = 1440;
export const HEIGHT = 924;

export const MOBILE_WIDTH = 414;
export const MOBILE_HEIGHT = 740;

const windowWidth = typeof document != 'undefined' ? document.body.clientWidth : WIDTH;
export const widthPixel = (px: number, width = WIDTH) => {
  if (windowWidth <= 480) {
    return `${(px / MOBILE_WIDTH) * 100}vw`;
  }
  return `${(px / width) * 100}vw`;
};

export const heightPixel = (px: number, height = HEIGHT) => {
  if (windowWidth <= 480) {
    return `${(px / MOBILE_HEIGHT) * 100}vh`;
  }
  return `${(px / height) * 100}vh`;
};

export const fontSize = (px: number, width?: number) => widthPixel(px, width);

export const lineheight = (px: number, height?: number) => heightPixel(px, height);

export const mobileStyle = (style: CSSObject) => {
  return { '@media(max-width: 480px)': style };
};
