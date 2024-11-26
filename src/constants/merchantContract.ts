export type MilesPercentage = {
  id: string;
  label: string;
  value: number;
  description: string;
};

export const milesPercentage: MilesPercentage[] = [
  {
    id: '3-aladdin-miles',
    label: '15%',
    value: 15,
    description: 'This is equal to 3 AladdinMiles'
  },
  {
    id: '2-aladdin-miles',
    label: '13%',
    value: 13,
    description: 'This is equal to 2 AladdinMiles'
  },
  {
    id: '1-aladdin-miles',
    label: '10%',
    value: 10,
    description: 'This is equal to 1 AladdinMiles'
  },
  { id: 'others', label: 'Others', value: 0, description: 'Enter Percentage' }
];

export const steps: Record<'salesFlow' | 'merchantFlow', string[]> = {
  salesFlow: ['AladdinMiles Percentage', 'Merchant Details'],
  merchantFlow: ['Merchant Details', 'Sign Contract', 'Upload Signed Contract']
};
