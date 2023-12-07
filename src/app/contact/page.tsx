import { TextInput } from '@/components/inputs/textInput';
import { Metadata } from 'next';
import React from 'react';
import {
  Background,
  Form,
  GetHelp,
  Header,
  InputWrapper,
  Label,
  SideBySide,
  SubHeader,
  Submit,
  TwentyFour
} from './styles';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'We are building a magical world. The best place to meet your travel and shopping needs all at once.',
  keywords:
    'Contact us, About AladdinMiles, Travel for free, Travel for free KSA, Travel for free Saudi Arabia, Travel for free world wide, merchants, venues, AladdinMiles Portal, Loyalty app, loyalty saudi arabia, airlines loyalty in saudi arabia, loyalty app KSA, AladdinMiles Kingdom'
};

const Contact: React.FC = () => {
  return (
    <Background>
      <Form>
        <TwentyFour>
          <GetHelp>Get Help</GetHelp>
          <div>
            <Header>Need help? Contact us.</Header>
            <SubHeader>
              Complete this form to get connected to our support team. We will
              get back to you shortly.
            </SubHeader>
          </div>
        </TwentyFour>
        <TwentyFour>
          <SideBySide>
            <InputWrapper>
              <Label>First Name</Label>
              <TextInput name="first_name" />
            </InputWrapper>
            <InputWrapper>
              <Label>Last Name</Label>
              <TextInput name="last_name" />
            </InputWrapper>
          </SideBySide>
          <SideBySide>
            <InputWrapper>
              <Label>Phone Number</Label>
              <TextInput name="phone" />
            </InputWrapper>
            <InputWrapper>
              <Label>Email</Label>
              <TextInput name="email" />
            </InputWrapper>
          </SideBySide>
        </TwentyFour>
        <Submit href="#">Submit</Submit>
      </Form>

      {/* {false && (
        <Form>
          <TwentyFour>
            <GetHelp>Get Help</GetHelp>
            <div>
              <Header>Your Message Has Been Sent!</Header>
              <SubHeader>
                Our team will get started on your message and respond to you as
                soon as possible.
              </SubHeader>
            </div>
          </TwentyFour>
          <Img
            src="/images/mail-box.png"
            alt="success"
            width={240}
            height={240}
          />
          <Submit href="#">Submit</Submit>
        </Form>
      )} */}
    </Background>
  );
};

export default Contact;
