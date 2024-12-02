export default Object.freeze({
  CONTRACT_UPLOADS: (contractId: string = '', query: string = '') =>
    `/api/v1/merchant/contract_uploads/${contractId}${query}`,
  GENERATE_CONTRACT_PDF: (contractId: string = '', query: string = '') =>
    `/api/v1/merchant/contract_uploads/${contractId}/generate${query}`,
  UPLOAD_SIGNED_CONTRACT_PDF: (contractId: string = '', query: string = '') =>
    `/api/v1/merchant/contract_uploads/${contractId}/media${query}`
});
