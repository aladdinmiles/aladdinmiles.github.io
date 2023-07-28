import { privacy } from '../content';
import { LegalContainer } from '../shared/legalContainer';
import { SmallerHeader } from '../shared/styled';
import { ContentView, RaleText } from '../styles';
import { ColoredSection, HeroContentTextArea, MultiStyleText } from './styles';

const PrivacyPage: React.FC = () => {
  return (
    <ContentView>
      <ColoredSection>
        <HeroContentTextArea>
          <SmallerHeader>Legal</SmallerHeader>
          <MultiStyleText>Privacy Policy</MultiStyleText>
          <RaleText>
            We value your privacy and are dedicated to responsibly safeguarding it in accordance with the legal
            requirements of the countries where we operate. Therefore, this Privacy Policy outlines the kinds of
            personal information AladdinMiles gather from you, the reasons behind collecting it, and how we handle it.
          </RaleText>
          <RaleText>Last Updated: 10th July, 2023</RaleText>
        </HeroContentTextArea>
      </ColoredSection>
      <LegalContainer>{privacy}</LegalContainer>
    </ContentView>
  );
};

export default PrivacyPage;
