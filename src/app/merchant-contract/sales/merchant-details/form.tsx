'use client';
import { useFormik } from 'formik';
import { MerchantDetailsSchema } from '../../schema';
import Input from '@/components/inputs/input';
import Image from 'next/image';
import prependCountryCode from '@/utils/prependCountryCode';
import { useRouter } from 'next/navigation';
import { Button } from '@headlessui/react';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import SuccessState from '@/components/successState';
import { useState } from 'react';
import getSelectedMilesPercentage from '@/utils/getSelectedMilesPercentage';

type MerchantDetails = {
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

const initialValues: MerchantDetails = {
  commission: getSelectedMilesPercentage()?.value || 0,
  crId: '',
  companyName: '',
  ownerName: '',
  position: '',
  hqPhone: prependCountryCode(''),
  bankAccountName: '',
  iban: '',
  bankName: '',
  emailAddress: '',
  accountantPhone: prependCountryCode(''),
  address: ''
};

const MerchantDetailsForm: React.FC = () => {
  const { back } = useRouter();
  const [show, setShow] = useState<boolean>(false);

  const formik = useFormik<MerchantDetails>({
    enableReinitialize: true,
    initialValues,
    validationSchema: MerchantDetailsSchema,

    onSubmit: (values) => {
      console.log('values', values);
      setShow(true);
    }
  });

  const handleClose = () => {
    setShow(false);
    // TODO: uncomment this section
    // formik.resetForm();
    // window.localStorage.removeItem('commission');
  };

  const isDisabled = Object.keys(formik.errors).length !== 0;

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
      >
        <div className="px-0 sm:px-8 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <Input
              id="crId"
              name="crId"
              type="text"
              required
              label="CR Number"
              placeholder="Enter merchant's CR Number"
              value={formik.values.crId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.crId && Boolean(formik.errors.crId)}
              errorMsg={formik.errors.crId}
            />

            <Input
              id="companyName"
              name="companyName"
              type="text"
              required
              label="Company Name"
              placeholder="Enter merchant's company name"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={
                formik.touched.companyName && Boolean(formik.errors.companyName)
              }
              errorMsg={formik.errors.companyName}
            />

            <Input
              id="ownerName"
              name="ownerName"
              type="text"
              required
              label="Owner Name / Manager"
              placeholder="Enter merchant's name"
              value={formik.values.ownerName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={
                formik.touched.ownerName && Boolean(formik.errors.ownerName)
              }
              errorMsg={formik.errors.ownerName}
            />

            <Input
              id="position"
              name="position"
              type="text"
              required
              label="Position"
              placeholder="Enter merchant's position"
              value={formik.values.position}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={
                formik.touched.position && Boolean(formik.errors.position)
              }
              errorMsg={formik.errors.position}
            />

            <Input
              id="hqPhone"
              name="hqPhone"
              type="text"
              required
              label="HQ Telephone Number"
              placeholder="Enter merchant's hq phone number"
              value={formik.values.hqPhone}
              onChange={(e) => {
                formik.setFieldValue(
                  'hqPhone',
                  prependCountryCode(e.target.value)
                );
              }}
              onBlur={formik.handleBlur}
              isInvalid={
                formik.touched.hqPhone && Boolean(formik.errors.hqPhone)
              }
              errorMsg={formik.errors.hqPhone}
              leftAffix={
                <div className="h-full w-full flex items-center justify-center">
                  <Image
                    src="/images/saudi-flag.svg"
                    width={32}
                    height={24}
                    alt="flag"
                  />
                </div>
              }
            />

            <Input
              id="bankAccountName"
              name="bankAccountName"
              type="text"
              required
              label="Bank Account Name"
              placeholder="Enter merchant's bank account name"
              value={formik.values.bankAccountName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={
                formik.touched.bankAccountName &&
                Boolean(formik.errors.bankAccountName)
              }
              errorMsg={formik.errors.bankAccountName}
            />

            <Input
              id="iban"
              name="iban"
              type="text"
              required
              label="IBAN Number"
              placeholder="Enter merchant's IBAN Number"
              value={formik.values.iban}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.iban && Boolean(formik.errors.iban)}
              errorMsg={formik.errors.iban}
            />

            <Input
              id="bankName"
              name="bankName"
              type="text"
              required
              label="Bank Name"
              placeholder="Enter merchant's bank name"
              value={formik.values.bankName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={
                formik.touched.bankName && Boolean(formik.errors.bankName)
              }
              errorMsg={formik.errors.bankName}
            />

            <Input
              id="emailAddress"
              name="emailAddress"
              type="email"
              required
              label="Email address"
              placeholder="Enter merchant's email address"
              value={formik.values.emailAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={
                formik.touched.emailAddress &&
                Boolean(formik.errors.emailAddress)
              }
              errorMsg={formik.errors.emailAddress}
            />

            <Input
              id="accountantPhone"
              name="accountantPhone"
              type="text"
              required
              label="Accounting Phone Number"
              placeholder="Enter merchant's accounting phone number"
              value={formik.values.accountantPhone}
              onChange={(e) =>
                formik.setFieldValue(
                  'accountantPhone',
                  prependCountryCode(e.target.value)
                )
              }
              onBlur={formik.handleBlur}
              isInvalid={
                formik.touched.accountantPhone &&
                Boolean(formik.errors.accountantPhone)
              }
              errorMsg={formik.errors.accountantPhone}
              leftAffix={
                <div className="h-full w-full flex items-center justify-center">
                  <Image
                    src="/images/saudi-flag.svg"
                    width={32}
                    height={24}
                    alt="flag"
                  />
                </div>
              }
            />

            <div className="col-span-full">
              <Input
                id="address"
                name="address"
                type="text"
                required
                label="Address"
                placeholder="Enter merchant's address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.address && Boolean(formik.errors.address)
                }
                errorMsg={formik.errors.address}
              />
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 py-10">
            <Button
              className="w-full sm:w-auto bg-gray-25 hover:bg-gray-50 text-primary-500 px-4 sm:px-6 py-2 sm:py-4 rounded-md flex items-center justify-center gap-1 sm:gap-2"
              type="button"
              onClick={back}
            >
              <IoArrowBack className="w-4 sm:w-5 h-4 sm:h-5" />
              Go Back
            </Button>
            <Button
              className="w-full sm:w-auto disabled:opacity-30 px-4 sm:px-6 py-2 sm:py-4 text-white bg-primary-500 hover:bg-primary-600 rounded-md flex items-center justify-center gap-1 sm:gap-2"
              disabled={isDisabled}
              type="submit"
            >
              Save and copy link
              <IoArrowForward className="w-4 sm:w-5 h-4 sm:h-5" />
            </Button>
          </div>
        </div>
      </form>

      <SuccessState
        isOpen={show}
        onClose={handleClose}
        title="Merchant Information Saved"
        message="The merchant’s contract information has been saved to the AladdinMiles system. "
      />
    </>
  );
};

export default MerchantDetailsForm;
