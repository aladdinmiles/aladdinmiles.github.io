import phone from 'phone';
import * as Yup from 'yup';

export const StartContractSchema = Yup.object().shape({
  selectedMilesPercentage: Yup.object()
    .shape({
      id: Yup.string().required('Id is required'),
      label: Yup.string().required('Label is required'),
      description: Yup.string().required('Description is required'),
      value: Yup.number()
        .min(0, 'Minimum percentage is 0')
        .max(100, 'Maximum percentage is 100')
        .required('Enter a percentage')
    })
    .required('Select a percentage'),
  commission: Yup.number()
    .min(0, 'Minimum percentage is 0')
    .max(100, 'Maximum percentage is 100')
    .required('Enter a percentage')
});

export const MerchantDetailsSchema = Yup.object().shape({
  commission: Yup.number()
    .min(0, 'Minimum percentage is 0')
    .max(100, 'Maximum percentage is 100')
    .required('Enter a percentage'),
  crId: Yup.string().required('CR Number is required'),
  companyName: Yup.string().required('Company Name is required'),
  ownerName: Yup.string().required('Owner Name is required'),
  position: Yup.string().required('Position is required'),
  hqPhone: Yup.string()
    .required('HQ Phone Number is required')
    .min(6, 'Enter a valid phone number')
    .test('is-valid-phone', 'HQ Phone Number is not valid', (value) => {
      return phone(value).isValid;
    }),
  bankAccountName: Yup.string().required('Bank Account Number is required'),
  iban: Yup.string().required('IBAN Number is required'),
  bankName: Yup.string().required('Bank Name is required'),
  emailAddress: Yup.string()
    .email('Invalid email format')
    .required('Email Address is required'),
  accountantPhone: Yup.string()
    .required('Accounting Phone Number is required')
    .min(6, 'Enter a valid phone number')
    .test('is-valid-phone', 'Accounting Phone Number is not valid', (value) => {
      return phone(value).isValid;
    }),
  address: Yup.string().required('Address is required')
});
