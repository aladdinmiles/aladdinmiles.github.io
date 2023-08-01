'use client';
import { TextInput } from '@/components/inputs/textInput';
import { CloseIcon } from '@/components/navigation/mobile';
import Image from 'next/image';
import { ColoredText } from '../styles';
import {
  CHT,
  CHeaderTextArea,
  CT,
  CardHeaderSection,
  CardIcon,
  CardText,
  CloseButton,
  Form,
  FormCard,
  FormContainer,
  FormRight,
  FormWrapper,
  IconWrapper,
  Submit
} from './styles';

export const MerchantForm: React.FC = () => {
  return (
    <FormWrapper id="formWrapper">
      <FormCard>
        <CloseButton href="/merchant">
          <CloseIcon />
        </CloseButton>
        <FormContainer>
          <CardHeaderSection>
            <Image
              src="/images/Aladdin-Logo-Color.svg"
              alt="aladdin logo"
              width={64}
              height={46}
            />
            <CHeaderTextArea>
              <CHT>Become a merchant</CHT>
              <CT>
                Join AladdinMiles as a merchant and grow your customer base.
              </CT>
            </CHeaderTextArea>
          </CardHeaderSection>
          <Form>
            <TextInput placeholder="Name *" />
            <TextInput placeholder="Venue name" />
            <TextInput placeholder="Phone number" />
            <TextInput placeholder="Email address" />
          </Form>
          <Submit>Submit Request</Submit>
        </FormContainer>
        <FormRight>
          <IconWrapper>
            <CardText>
              Get <ColoredText>access</ColoredText> to the right audience and{' '}
              <ColoredText>grow</ColoredText> your business.
            </CardText>
            <CardIcon />
          </IconWrapper>
        </FormRight>
      </FormCard>
    </FormWrapper>
  );
};
