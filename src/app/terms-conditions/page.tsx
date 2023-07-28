import { termCondition } from '../content';
import { MultiStyleText } from '../privacy-policy/styles';
import { LegalContainer } from '../shared/legalContainer';
import { SmallerHeader } from '../shared/styled';
import { ContentView, RaleText } from '../styles';
import { ColoredSection, HeroContentTextArea } from './styles';

const Privacy: React.FC = () => {
  return (
    <ContentView>
      <ColoredSection>
        <HeroContentTextArea>
          <SmallerHeader>Legal</SmallerHeader>
          <MultiStyleText>Terms and Conditions</MultiStyleText>
          <RaleText>
            These terms and conditions govern your use of and access to the services of AladdinMiles, and are subject to
            the following terms; if you do not agree to all of these terms, you may not use or access AladdinMiles
            services.
          </RaleText>
          <RaleText>Last Updated: 10th July, 2023</RaleText>
        </HeroContentTextArea>
      </ColoredSection>
      <LegalContainer>{termCondition}</LegalContainer>
    </ContentView>
  );
};

export default Privacy;
