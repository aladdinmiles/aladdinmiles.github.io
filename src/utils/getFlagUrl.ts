import phone from 'phone';

export const getFlagUrl = (countryCode: string): string =>
  `https://flagcdn.com/${countryCode.toLowerCase()}.svg`;

export const getFlagUrlFromPhone = (
  phoneNumber?: string,
  defaultCountryIso2: string = 'SA'
): string => {
  if (phoneNumber) {
    const validation = phone(phoneNumber, { validateMobilePrefix: true });
    if (validation.isValid && validation.countryIso2) {
      return getFlagUrl(validation.countryIso2);
    }
  }
  return getFlagUrl(defaultCountryIso2);
};
