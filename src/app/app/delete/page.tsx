'use client';
import { Metadata } from 'next';
import validator from 'validator';
import React, { useState } from 'react';
import {
  Actions,
  Checkbox,
  DeleteCard,
  DeleteManText,
  DeleteSmallText,
  DeleteView,
  Input,
  LeftCard,
  RightCard,
  SB
} from '../styles';
import { TextInput } from '@/components/inputs/textInput';
import { InputWrapper, Label } from '@/app/contact/styles';
import {
  Button,
  NoLinkButton,
  OutlinedButton,
  OutlinedNoLinkButton
} from '@/components/buttons';
import { toast } from 'react-toastify';
import phone from 'phone';

// export const metadata: Metadata = {
//   title: 'Delete Account',
//   description:
//     'We are building a magical world. The best place to meet your travel and shopping needs all at once.',
//   keywords:
//     'About us, About AladdinMiles, Travel for free, Travel for free KSA, Travel for free Saudi Arabia, Travel for free world wide, merchants, venues, AladdinMiles Portal, Loyalty app, loyalty saudi arabia, airlines loyalty in saudi arabia, loyalty app KSA, AladdinMiles Kingdom'
// };

export default (() => {
  const [form, setForm] = useState<{ username: string; password: string }>({
    password: '',
    username: ''
  });
  const [checked, setChecked] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((values) => ({ ...values, [name]: value }));
  };

  const deleteAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const isvalid =
      Object.values(form).length > 0 &&
      Object.values(form).every((value) => Boolean(value));

    if (!isvalid) {
      toast('Please fill all fields', { type: 'error' });
      return;
    } else if (
      !phone(form.username ?? '').isValid &&
      !validator.isEmail(form.username || '')
    ) {
      toast(
        'Please enter a valid phone number(including country code) or email address',
        {
          type: 'error'
        }
      );
      return;
    }

    try {
      const newForm: FormData = new FormData();
      newForm.append('username', form.username);
      newForm.append('password', form.password);

      const loggedIn = await fetch(
        'https://ambe.aladdinmiles.com/api/v1/login/access-token',
        {
          headers: {
            'Content-Type': 'multipart/formdata'
          },
          body: newForm,
          method: 'POST'
        }
      );
      const token = await loggedIn.json();
      if (loggedIn.status >= 400) {
        throw token;
      }
      console.log(token);

      const res = await fetch('https://ambe.aladdinmiles.com/api/v1/users/me', {
        headers: {
          Authorization: 'Bearer ' + token.access_token
        },
        method: 'DELETE'
      });
      toast('Account Deleted!', { type: 'success' });
    } catch (e: any) {
      console.log(e);

      toast(JSON.stringify(e.detail) ?? 'Request failed!', { type: 'error' });
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DeleteView>
      <DeleteCard>
        <LeftCard>
          <DeleteManText>
            Do you want to permanently delete your account?
          </DeleteManText>
          <DeleteSmallText>
            You will delete your entire account and will not be able to access
            your account and lose access to all data on your account.
          </DeleteSmallText>
        </LeftCard>
        <RightCard onSubmit={deleteAccount}>
          <InputWrapper>
            <Label>Phone number / Email</Label>
            <Input
              name="username"
              placeholder="+234800000000"
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Password</Label>
            <Input
              name="password"
              onChange={handleChange}
              type={!checked ? 'password' : 'text'}
            />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="show">
              <Checkbox
                id="show"
                name="show"
                type="checkbox"
                checked={checked}
                onChange={handleChecked}
              />
              Show paswword
            </Label>
          </InputWrapper>
          <Actions>
            <OutlinedButton href="/">Cancel</OutlinedButton>
            <NoLinkButton disabled={isLoading}>Delete Account</NoLinkButton>
          </Actions>
        </RightCard>
      </DeleteCard>
    </DeleteView>
  );
}) as React.FC;
