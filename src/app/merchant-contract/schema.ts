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
  customMilesPercentage: Yup.number()
    .min(0, 'Minimum percentage is 0')
    .max(100, 'Maximum percentage is 100')
    .required('Enter a percentage'),
  otherwise: Yup.number().notRequired()
});
