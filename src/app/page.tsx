import { Button } from '@/components/buttons';
import { Raleway } from 'next/font/google';
import Image from 'next/image';
import { fourCardHome } from './content';
import { FourCardSection } from './shared';
import {
  AppDownload,
  AppDownloadArea,
  Arrow,
  BigCircle,
  BlueBackground,
  ButtonContainer,
  ColoredHalf,
  ColoredText,
  ContentView,
  DownloadContent,
  DownloadHeader,
  HeroImage,
  HeroSection,
  Line,
  ManText,
  MultiStyleText,
  Partners,
  PinkBackground,
  QRCodeBackground,
  RaleText,
  RaleTextWhite,
  SB,
  SmallMultiStyleText,
  SmallboldText,
  StartShoppingAreaLeft,
  StartShoppingAreaRight,
  StoreButtons,
  TextContentArea,
  TextWithSVG,
  Trusted,
  WhiteHalf
} from './styles';

const rale = Raleway({
  weight: '700',
  subsets: ['latin']
});

export default function Home() {
  return (
    <ContentView>
      <HeroSection>
        <WhiteHalf>
          <TextContentArea>
            <MultiStyleText className={rale.className}>
              The{' '}
              <TextWithSVG>
                <ColoredText>fastest</ColoredText>
                <Line />
              </TextWithSVG>{' '}
              way to <ColoredText>travel</ColoredText> for <ColoredText>free! </ColoredText>
            </MultiStyleText>
            <RaleText>
              Get rewarded in Air Miles whenever you shop your favorites brands on the AladdinMiles app.
            </RaleText>
            <AppDownloadArea>
              <QRCodeBackground>
                <Image src="/images/QRCode.svg" alt="qrcode" width={89.6} height={89.6} />
              </QRCodeBackground>
              <div>
                <RaleText>Scan to download</RaleText>
                <ButtonContainer>
                  <StoreButtons href="https://apps.apple.com/app/aladdin-miles-%D8%A7%D9%85%D9%8A%D8%A7%D9%84-%D8%B9%D9%84%D8%A7%D8%A1-%D8%A7%D9%84%D8%AF%D9%8A%D9%86/id1503894088">
                    <Image alt="Get it on Google Play" src="/images/appstore.svg" width={160} height={46} />
                  </StoreButtons>
                  <StoreButtons href="https://play.google.com/store/apps/details?id=com.aladdinmiles.customer&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                    <Image alt="Get it on Google Play" src="/images/google-play-badge.svg" width={160} height={46} />
                  </StoreButtons>
                </ButtonContainer>
              </div>
            </AppDownloadArea>
          </TextContentArea>
          <Trusted>
            <ManText>Trusted by the best businesses</ManText>
            <Partners>
              <Image src="/images/intermile.png" width={128} height={40} alt="intermiles" />
              <Image src="/images/ame.png" width={128} height={40} alt="intermiles" />
              <Image src="/images/airasia.png" width={75} height={40} alt="intermiles" />
            </Partners>
          </Trusted>
        </WhiteHalf>
        <ColoredHalf>
          <HeroImage src="/images/hero-image.png" width={600} height={600} alt="hero images" />
        </ColoredHalf>
      </HeroSection>
      <FourCardSection {...fourCardHome} />
      <PinkBackground>
        <StartShoppingAreaLeft>
          <SmallMultiStyleText className={rale.className}>
            The ultimate{' '}
            <TextWithSVG>
              <ColoredText>one-stop</ColoredText>
              <Line />
            </TextWithSVG>{' '}
            shop for all your needs
          </SmallMultiStyleText>
          <SB>
            <Image src="/images/small-device.png" width={32} height={48} alt="small-device" />
            <SmallboldText>Download the AladdinMiles app today!</SmallboldText>
          </SB>
          <RaleText>Download the AladdinMiles app today and unlock a treasure trove right at your fingertips!</RaleText>
          <Button href="/#">
            Start Shopping <Arrow />
          </Button>
        </StartShoppingAreaLeft>
        <StartShoppingAreaRight>
          <BigCircle></BigCircle>
          <Image src="/images/slide1.png" width={404} height={640} alt="slider1" />
        </StartShoppingAreaRight>
      </PinkBackground>
      <BlueBackground id="download">
        <AppDownload>
          <DownloadContent>
            <div>
              <DownloadHeader>Download the AladdinMiles App</DownloadHeader>
              <RaleTextWhite>Order from your favorite stores and get rewarded for every purchase.</RaleTextWhite>
            </div>
            <ButtonContainer>
              <StoreButtons href="https://apps.apple.com/app/aladdin-miles-%D8%A7%D9%85%D9%8A%D8%A7%D9%84-%D8%B9%D9%84%D8%A7%D8%A1-%D8%A7%D9%84%D8%AF%D9%8A%D9%86/id1503894088">
                <Image alt="Get it on Google Play" src="/images/appstore.svg" width={160} height={50} />
              </StoreButtons>
              <StoreButtons href="https://play.google.com/store/apps/details?id=com.aladdinmiles.customer&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <Image alt="Get it on Google Play" src="/images/google-play-badge.svg" width={160} height={600} />
              </StoreButtons>
            </ButtonContainer>
          </DownloadContent>
        </AppDownload>
      </BlueBackground>
    </ContentView>
  );
}
