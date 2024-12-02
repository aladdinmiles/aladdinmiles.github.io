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
  crId: string | null;
  companyName: string | null;
  ownerName: string | null;
  position: string | null;
  hqPhone: string | null;
  bankAccountName: string | null;
  iban: string | null;
  bankName: string | null;
  emailAddress: string | null;
  accountantPhone: string | null;
  address: string | null;
  bankCharges: number | null;
  taxId: string | null;
  signerEmail: string | null;
  signerFullName: string | null;
  signerPosition: string | null;
  contractMediaId: string | null;
  contractMedia: {
    type: string;
    mediaUrl: string;
    entityType: string;
    checksum: string;
    id: string;
  } | null;
  contractSignedAt: string | null;
  createdBy: string | null;
  createdByRole: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};
