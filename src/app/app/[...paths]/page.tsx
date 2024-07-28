import { Raleway } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import {
  ButtonContainer,
  ColoredText,
  ContentView,
  DownloadImage,
  Left,
  Line,
  MultiStyleText,
  RaleText,
  StoreButtons,
  TextWithSVG,
  View
} from '../styles';
import { Redirect } from '@/app/redirect';

const rale = Raleway({
  weight: '700',
  subsets: ['latin']
});

const MobileApp: React.FC = () => {
  return (
    <ContentView>
      <View>
        <Left>
          <MultiStyleText className={rale.className}>
            <TextWithSVG>
              <ColoredText>Download</ColoredText>
              <Line />
            </TextWithSVG>{' '}
            the AladdinMiles App
          </MultiStyleText>
          <RaleText>
            Click on your app store to download the AladdinMiles app and start
            getting rewarded every time you shop.
          </RaleText>
          <ButtonContainer>
            <StoreButtons
              target="_blank"
              href="https://apps.apple.com/app/aladdin-miles-%D8%A7%D9%85%D9%8A%D8%A7%D9%84-%D8%B9%D9%84%D8%A7%D8%A1-%D8%A7%D9%84%D8%AF%D9%8A%D9%86/id1503894088"
            >
              <Image
                alt="Get it on Google Play"
                src="/images/appstore.svg"
                width={160}
                height={46}
              />
            </StoreButtons>
            <StoreButtons
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.aladdinmiles.customer&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            >
              <Image
                alt="Get it on Google Play"
                src="/images/google-play-badge.svg"
                width={160}
                height={46}
              />
            </StoreButtons>
          </ButtonContainer>
        </Left>
        <DownloadImage
          alt="Image"
          width={720}
          height={824}
          src="/images/mobile_landing.png"
        />
      </View>
      <Redirect />
    </ContentView>
  );
};

export default MobileApp;
