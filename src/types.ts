export interface ErrorProps {
  message: string;
  status: number;
  error?: any;
}

export interface SuccessProps<T> {
  message: string;
  status: number;
  data?: T;
}

export interface FetchState<T> {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error?: ErrorProps;
  success?: SuccessProps<T>;
  data?: T;
}

export type MerchantContractDetails = {
  commission: number;
  crId: string;
  companyName: string;
  ownerName: string;
  position: string;
  hqPhone: string;
  bankAccountName: string;
  iban: string;
  bankName: string;
  emailAddress: string;
  accountantPhone: string;
  address: string;
};
