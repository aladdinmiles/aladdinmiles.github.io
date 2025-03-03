import phone from 'phone';
import * as Yup from 'yup';

const fullNameRegex = /^[A-Za-z]+ [A-Za-z]+$/;

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
  hqFlagUrl: Yup.string().required('HQ Flag URL is required'),
  accountantFlagUrl: Yup.string().required('Accountant Flag URL is required'),
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

export const SignContractSchema = Yup.object().shape({
  signerFullName: Yup.string()
    .required('Full name is required')
    .matches(fullNameRegex, {
      message: 'Please enter a valid first and last name'
    }),
  signerPosition: Yup.string().required('Position is required'),
  signerEmail: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  date: Yup.date()
    .required('Date is required')
    .typeError('Date must be a valid date')
});

export const UploadSignedContractSchema = Yup.object().shape({
  files: Yup.array()
    .of(
      Yup.object().shape({
        file: Yup.mixed()
          .test(
            'is-file',
            'File must be a File object',
            (value) => value instanceof File
          )
          .test('is-pdf-file', 'File must be a pdf', (value) => {
            return value instanceof File && value.type === 'application/pdf';
          }),
        url: Yup.string().nullable()
      })
    )
    .test(
      'only-one-file-required',
      'Upload a signed contract',
      function (value) {
        return (
          value?.filter((file) => file.file !== null && file.file !== undefined)
            .length === 1
        );
      }
    )
    .required('File upload is required')
});
