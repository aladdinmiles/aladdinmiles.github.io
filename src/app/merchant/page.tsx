import { Button } from '@/components/buttons';
import Image from 'next/image';
import { SmallerHeader } from '../shared/styled';
import { Arrow, ColoredText, ContentView, MultiStyleText, RaleText } from '../styles';
import { BottomSection, HeroContent, HeroContentTextArea, HeroSection } from './styles';

const BecomeAMerchant: React.FC = () => {
  return (
    <ContentView>
      <HeroSection>
        <HeroContent>
          <HeroContentTextArea>
            <SmallerHeader>Become a merchant</SmallerHeader>
            <MultiStyleText>Looking to grow your business? We’ve got you!</MultiStyleText>
            <RaleText>Partner with the world best loyalty platform and watch your business skyrocket.</RaleText>
          </HeroContentTextArea>
          <Button href="/#">
            Sign up now <Arrow />
          </Button>
        </HeroContent>
        <Image src="/images/merchantTop.png" width={616} height={600} alt="city" />
      </HeroSection>
      <BottomSection>
        <Image src="/images/merchantBottom.png" width={616} height={600} alt="team" />
        <HeroContent>
          <HeroContentTextArea>
            <SmallerHeader>Become a partner</SmallerHeader>
            <MultiStyleText>
              <ColoredText>Partner</ColoredText> with us!
            </MultiStyleText>
            <RaleText>
              AladdinMiles is the first mobile app that allows users earn airline miles from everyday spending, travel
              and activities. Let your customers earn miles when they spend at restaurants, retail outlets, boutique and
              luxury hotels, premium spas, gift cards, tickets to major events and attractions, and much more!{' '}
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
