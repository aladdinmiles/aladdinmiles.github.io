'use client';
import { Button, Radio, RadioGroup } from '@headlessui/react';
import { useFormik } from 'formik';
import { MilesPercentage, milesPercentage } from '@/constants/merchantContract';
import classNames from '@/utils/classNames';
import { StartContractSchema } from '../../../components/schema';
import Input from '@/components/inputs/input';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams
} from 'next/navigation';
import { IoArrowForward } from 'react-icons/io5';
import useQuery from '@/hooks/useQuery';
import e from '@/constants/endpoints';
import useMutation from '@/hooks/useMutation';
import { MerchantContractDetails } from '@/types';
import { convertKeysToSnakeCase } from '@/utils/convertKeys';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { storeCheckSum } from '../../../components/checkSum';

const initialValues = (data?: MerchantContractDetails) => ({
  commission: typeof data?.commission === 'number' ? data.commission * 100 : 0,
  selectedMilesPercentage:
    typeof data?.commission === 'number'
      ? milesPercentage.find((per) => per.value / 100 === data?.commission) ||
        milesPercentage.find((per) => per.id === 'others')!
      : milesPercentage[0]
});

const StartContractForm: React.FC = () => {
  const { id } = useParams();
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const checkSum = searchParams.get('checksum');

  const { isLoading, data } = useQuery<MerchantContractDetails>(
    e.CONTRACT_UPLOADS(id as string, `?checksum=${checkSum}`)
  );

  const { action, state } = useMutation<MerchantContractDetails>({
    endpoint: e.CONTRACT_UPLOADS('', `?checksum=${checkSum}&contract_id=${id}`),
    method: 'post',
    options: {
      headers: { 'Content-Type': 'application/json' }
    },
    onSuccess: (success) => {
      push(pathname.replace('start-contract', 'merchant-details'));
    },
    onError: (error) => {
      toast(error?.message, { type: 'error' });
    }
  });

  useEffect(() => {
    if (checkSum) {
      storeCheckSum(checkSum);
    }
  }, [checkSum]);

  const formik = useFormik<{
    commission: MilesPercentage['value'];
    selectedMilesPercentage: MilesPercentage;
  }>({
    enableReinitialize: true,
    initialValues: initialValues(data),
    validationSchema: StartContractSchema,
    onSubmit: (values) => {
      let payload = {
        commission: values.selectedMilesPercentage.value / 100
      };

      if (values.selectedMilesPercentage.id === 'others') {
        payload = {
          commission: values.commission / 100
        };
      }
      action(convertKeysToSnakeCase(payload));
    }
  });

  const isDisabled =
    isLoading || state.isLoading || Object.keys(formik.errors).length !== 0;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(e);
      }}
    >
      <div className="px-0 sm:px-8">
        <RadioGroup
          value={formik.values.selectedMilesPercentage}
          onChange={(value) =>
            formik.setFieldValue('selectedMilesPercentage', value)
          }
          className="grid grid-cols-1 gap-y-4"
          id="milesPercentages"
        >
          {milesPercentage.map((percentage) => {
            const isSelected =
              percentage.id === formik.values.selectedMilesPercentage.id;
            return (
              <Radio
                key={percentage.id}
                id={percentage.id}
                value={percentage}
                className={classNames(
                  isSelected
                    ? 'border-2 border-primary-500 bg-gray-25 cursor-default'
                    : 'border border-gray-200 cursor-pointer',
                  'relative flex gap-x-4 rounded-2xl border bg-white p-4 sm:p-6 focus:outline-none ring-0'
                )}
              >
                <div
                  className={classNames(
                    isSelected ? 'border-primary-500' : 'border-gray-200',
                    'mt-2 rounded-full p-0.5 h-max border flex items-center justify-center'
                  )}
                >
                  <span
                    className={classNames(
                      isSelected ? 'bg-primary-500' : 'bg-transparent',
                      'w-1.5 h-1.5 rounded-full'
                    )}
                  />
                </div>
                <div>
                  <h3 className="text-xl text-black">{percentage.label}</h3>
                  <div className="gap-y-1">
                    {percentage.id === 'others' ? (
                      <>
                        <Input
                          id="commission"
                          name="commission"
                          type="number"
                          label={percentage.description}
                          value={formik.values.commission}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          isInvalid={
                            formik.touched.commission &&
                            Boolean(formik.errors.commission)
                          }
                          errorMsg={formik.errors.commission}
                          rightAffix={
                            <div className="h-full w-full flex items-center justify-center">
                              <p>%</p>
                            </div>
                          }
                        />
                      </>
                    ) : (
                      <p className="text-base text-gray-700">
                        {percentage.description}
                      </p>
                    )}
                  </div>
                </div>
              </Radio>
            );
          })}
        </RadioGroup>

        <div className="flex justify-end py-10">
          <Button
            className="disabled:opacity-30 px-4 sm:px-6 py-2 sm:py-4 text-white bg-primary-500 hover:bg-primary-600 rounded-md flex items-center gap-1 sm:gap-2"
            disabled={isDisabled}
            type="submit"
          >
            Save and continue
            <IoArrowForward className="w-4 sm:w-5 h-4 sm:h-5" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default StartContractForm;
