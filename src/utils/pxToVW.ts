export const WIDTH = 1440;
export const HEIGHT = 924;

export const widthPixel = (px: number, width = WIDTH) => {
  return `${(px / width) * 100}vw`;
};

export const heightPixel = (px: number, height = HEIGHT) => {
  return `${(px / height) * 100}vh`;
};

export const fontSize = (px: number, width?: number) => widthPixel(px, width);

export const lineheight = (px: number, height?: number) => heightPixel(px, height);
