import { Button } from '@/components/buttons';
import { Metadata } from 'next';
import Image from 'next/image';
import { fourCardAbout } from '../content';
import { FourCardSection } from '../shared';
import { SmallerHeader } from '../shared/styled';
import {
  Arrow,
  ColoredText,
  ContentView,
  MultiStyleText,
  RaleText
} from '../styles';
import {
  BlueBox,
  BoxArea,
  HeroLeft,
  HeroRight,
  HeroSection,
  HistoryContent,
  HistoryHeaderSection,
  HistorySection,
  JoinUs,
  JoinUsContent,
  JoinUsContentTextArea,
  JoinUsHeader,
  PinkBox,
  RaleTextWhite
} from './styles';

export const metadata: Metadata = {
  title: 'About us',
  description: 'About AladdinMiles',
  keywords:
    'About us, About AladdinMiles, Travel for free, Travel for free KSA, Travel for free Saudi Arabia, Travel for free world wide, merchants, venues, AladdinMiles Portal, Loyalty app, loyalty saudi arabia, airlines loyalty in saudi arabia, loyalty app KSA, AladdinMiles Kingdom'
};

const AboutUs: React.FC = () => {
  return (
    <ContentView>
      <HeroSection>
        <HeroLeft>
          <SmallerHeader>ABOUT US</SmallerHeader>
          <MultiStyleText>
            Making travel <ColoredText>free for everyone.</ColoredText>
          </MultiStyleText>
          <RaleText>
            We are building a magical world. The best place to meet your travel
            and shopping needs all at once.
          </RaleText>
        </HeroLeft>
        <HeroRight>
          <Image
            className="phone"
            src="/images/slide1.png"
            width={300}
            height={600}
            alt="phone"
          />
          <BoxArea>
            <PinkBox>
              <Image
                src="/images/purse-love.svg"
                width={160}
                height={160}
                alt="purse"
              />
            </PinkBox>
            <BlueBox>
              <Image
                src="/images/plane-cloud.svg"
                width={160}
                height={160}
                alt="plane"
              />
            </BlueBox>
          </BoxArea>
        </HeroRight>
      </HeroSection>
      <FourCardSection {...fourCardAbout} />
      <HistorySection>
        <Image src="/images/riyadh.jpg" width={300} height={600} alt="city" />
        <HistoryContent>
          <HistoryHeaderSection>
            <SmallerHeader>OUR HISTORY</SmallerHeader>
            <MultiStyleText>Our magical story</MultiStyleText>
          </HistoryHeaderSection>

          <RaleText>
            AladdinMiles is a groundbreaking loyalty program that transforms
            your everyday purchases into exciting travel experiences. You can
            earn miles effortlessly whenever you shop or dine. These miles can
            be later redeemed for flights to your dream destinations for your
            adventures.{' '}
          </RaleText>
          <RaleText>
            With AladdinMiles, you can unleash your wanderlust and explore new
            horizons, immerse yourself in different cultures, and create
            unforgettable memories, all without having to spend money on travel
            expenses.{' '}
          </RaleText>
          <RaleText>
            Do not miss out on this captivating opportunity. Join AladdinMiles
            today and let the enchantment of free travel transport you to a
            world full of wonder and splendor!
          </RaleText>
        </HistoryContent>
      </HistorySection>
      <JoinUs id="careers">
        <JoinUsContent>
          <JoinUsContentTextArea>
            <JoinUsHeader>
              Join us in building the No. 1 miles reward platform in the world.
            </JoinUsHeader>
            <RaleTextWhite>
              We are building a magical world, a one-of-a-kind loyalty platform
              for our vast users. Whether it’s shopping, eating or traveling, we
              value unique contributions, embrace diversity in people and ideas
              and welcome everyone. We’re building the best place to work. Join
              our team to create the future of loyalty.{' '}
            </RaleTextWhite>
          </JoinUsContentTextArea>
          <Button href="/#">
            See Open Roles <Arrow />
          </Button>
        </JoinUsContent>
        <Image src="/images/globe.svg" width={480} height={480} alt="globe" />
      </JoinUs>
    </ContentView>
  );
};

export default AboutUs;
