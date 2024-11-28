const prependCountryCode = (value: string): string => {
  if (!value.startsWith('+')) {
    return '+966' + value;
  }
  return value;
};

export default prependCountryCode;
