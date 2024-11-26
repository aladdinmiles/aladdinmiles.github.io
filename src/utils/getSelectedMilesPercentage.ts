import { MilesPercentage } from '@/constants/merchantContract';

const getSelectedMilesPercentage = (): MilesPercentage | undefined => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('selectedMilesPercentage')
      ? JSON.parse(window.localStorage.getItem('selectedMilesPercentage')!)
      : undefined;
  }
  return undefined;
};

export default getSelectedMilesPercentage;
