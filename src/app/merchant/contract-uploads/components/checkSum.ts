export const getCheckSum = (): string | null => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('checksum');
  }
  return null;
};

export const storeCheckSum = (checksum: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('checksum', checksum);
  }
};

export const removeCheckSum = () => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem('checksum');
  }
};
