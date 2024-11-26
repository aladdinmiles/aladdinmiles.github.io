'use client';
import { Button, Radio, RadioGroup } from '@headlessui/react';
import { useFormik } from 'formik';
import { MilesPercentage, milesPercentage } from '@/constants/merchantContract';
import classNames from '@/utils/classNames';
import { StartContractSchema } from '../../components/schema';
import Input from '@/components/inputs/input';
import { useRouter } from 'next/navigation';
import { IoArrowForward } from 'react-icons/io5';
import getSelectedMilesPercentage from '@/utils/getSelectedMilesPercentage';

const StartContractForm: React.FC = () => {
  const { push } = useRouter();

  const formik = useFormik<{
    commission: MilesPercentage['value'];
    selectedMilesPercentage: MilesPercentage;
  }>({
    enableReinitialize: true,
    initialValues: {
      commission: getSelectedMilesPercentage()?.value || 0,
      selectedMilesPercentage:
        getSelectedMilesPercentage() || milesPercentage[0]
    },
    validationSchema: StartContractSchema,
    onSubmit: (values) => {
      let payload = values.selectedMilesPercentage;

      if (values.selectedMilesPercentage.id === 'others') {
        payload = {
          ...values.selectedMilesPercentage,
          value: values.commission
        };
      }

      localStorage.setItem('selectedMilesPercentage', JSON.stringify(payload));
      push('/merchant-contract/sales/merchant-details');
    }
  });

  const isDisabled = Object.keys(formik.errors).length !== 0;

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
        >
          {milesPercentage.map((percentage) => {
            const isSelected =
              percentage.id === formik.values.selectedMilesPercentage.id;
            return (
              <Radio
                key={percentage.id}
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
                  <h3 className="text-xl">{percentage.label}</h3>
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
                      <p className="text-base text-[#3D414D]">
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
