'use client';

import { ColoredText } from '../styles';
import {
  CardIcon,
  CardText,
  FormCard,
  FormContainer,
  FormRight,
  FormWrapper,
  IconWrapper
} from './styles';

export const MerchantForm: React.FC = () => {
  return (
    <FormWrapper id="formWrapper">
      <FormCard>
        <FormContainer></FormContainer>
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
