export default Object.freeze({
  CONTRACT_UPLOADS: (contractId: string = '', query: string = '') =>
    `/api/v1/merchant/contract_uploads/${contractId}${query}`,
  CONTRACT_UPLOAD_URL: `/api/v1/merchant/contract_uploads/url`
});
