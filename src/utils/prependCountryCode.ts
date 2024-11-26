const prependCountryCode = (value: string): string => {
  if (!value.startsWith('+966')) {
    return '+966' + value;
  }
  return value;
};

export default prependCountryCode;
