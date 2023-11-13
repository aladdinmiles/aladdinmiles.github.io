import { Button } from '@/components/buttons';
import { Metadata } from 'next';
import Image from 'next/image';
import { SmallerHeader } from '../shared/styled';
import {
  Arrow,
  ColoredText,
  ContentView,
  MultiStyleText,
  RaleText
} from '../styles';
import {
  BottomSection,
  HeroContent,
  HeroContentTextArea,
  HeroSection
} from './styles';

export const metadata: Metadata = {
  title: 'Partner with us',
  description:
    'We are building a magical world. The best place to meet your travel and shopping needs all at once.',
  keywords:
    'About us, About AladdinMiles, Travel for free, Travel for free KSA, Travel for free Saudi Arabia, Travel for free world wide, merchants, venues, AladdinMiles Portal, Loyalty app, loyalty saudi arabia, airlines loyalty in saudi arabia, loyalty app KSA, AladdinMiles Kingdom'
};

const BecomeAMerchant: React.FC = () => {
  return (
    <ContentView>
      <HeroSection>
        <HeroContent>
          <HeroContentTextArea>
            <SmallerHeader className="small">Become a merchant</SmallerHeader>
            <MultiStyleText>
              Looking to <ColoredText>grow</ColoredText> your business? We’ve
              got you!
            </MultiStyleText>
            <RaleText>
              Partner with the world best loyalty platform and watch your
              business skyrocket.
            </RaleText>
          </HeroContentTextArea>
          <Button href="/merchant?action=request">
            Sign up now <Arrow />
          </Button>
        </HeroContent>
        <Image
          src="/images/merchantTop.png"
          width={616}
          height={600}
          alt="city"
        />
      </HeroSection>
      <BottomSection id="partners">
        <Image
          src="/images/merchantBottom.png"
          width={616}
          height={600}
          alt="team"
        />
        <HeroContent>
          <HeroContentTextArea>
            <SmallerHeader className="small">Become a partner</SmallerHeader>
            <MultiStyleText>
              <ColoredText>Partner</ColoredText> with us!
            </MultiStyleText>
            <RaleText>
              AladdinMiles is the first mobile app that allows users earn
              airline miles from everyday spending, travel and activities. Let
              your customers earn miles when they spend at restaurants, retail
              outlets, boutique and luxury hotels, premium spas, gift cards,
              tickets to major events and attractions, and much more!{' '}
            </RaleText>
          </HeroContentTextArea>
          <Button href="/#">
            Get in touch <Arrow />
          </Button>
        </HeroContent>
      </BottomSection>
    </ContentView>
  );
};

export default BecomeAMerchant;
