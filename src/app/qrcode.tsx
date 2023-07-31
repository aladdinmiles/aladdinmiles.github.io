'use client';
import { widthPixel } from '@/utils/pxToVW';
import QR from 'react-qr-code';

export const QRCode: React.FC = () => {
  return (
    <QR
      fgColor="#ffffff"
      bgColor="transparent"
      value={'https://www.aladdinmiles.com/download'}
      style={{
        width: widthPixel(78.4),
        height: widthPixel(78.4),
        alignSelf: 'center'
      }}
    />
  );
};
