'use client';
import { TextInput } from '@/components/inputs/textInput';
import { CloseIcon } from '@/components/navigation/mobile';
import Image from 'next/image';
import phone from 'phone';
import { useState } from 'react';
import { toast } from 'react-toastify';
import validator from 'validator';
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

type IForm = {
  name?: string;
  venue_name?: string;
  phone?: string;
  email?: string;
};

export const MerchantForm: React.FC = () => {
  const [form, setForm] = useState<IForm>({});

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    setForm((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const saveLead = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isvalid =
      Object.values(form).length > 0 &&
      Object.values(form).every((value) => Boolean(value));

    if (!isvalid) {
      toast('Please fill all fields', { type: 'error' });
      return;
    } else if (!validator.isEmail(form.email || '')) {
      toast('Please enter a valid email', { type: 'error' });
      return;
    } else if (!phone(form.phone ?? '').isValid) {
      toast('Please enter a valid phone number(including country code)', {
        type: 'error'
      });
      return;
    }

    try {
      const res = await fetch('/api/v1/merchant/leads/open?lang=english', {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...form,
          phone: phone(form.phone ?? '').phoneNumber
        }),
        method: 'POST'
      });
      toast('Request submitted!', { type: 'success' });
    } catch (e: any) {
      toast('Request failed!', { type: 'error' });
      console.log(e);
    }
  };
  return (
    <FormWrapper id="formWrapper">
      <FormCard>
        <CloseButton href="/merchant">
          <CloseIcon />
        </CloseButton>
        <FormContainer autoComplete="on" onSubmit={saveLead}>
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
            <TextInput
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={handleInput}
            />
            <TextInput
              placeholder="Venue name"
              name="venue_name"
              value={form.venue_name}
              onChange={handleInput}
            />
            <TextInput
              placeholder="Phone number +96600000000"
              name="phone"
              value={form.phone}
              onChange={handleInput}
            />
            <TextInput
              placeholder="Email address"
              name="email"
              value={form.email}
              onChange={handleInput}
            />
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
