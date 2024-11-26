'use client';
import { Radio, RadioGroup } from '@headlessui/react';
import { useFormik } from 'formik';
import { MilesPercentage, milesPercentage } from '@/constants/merchantContract';
import classNames from '@/utils/classNames';
import { StartContractSchema } from '../../schema';
import { NoLinkButton } from '@/components/buttons';
import Input from '@/components/inputs/input';

const StartContractForm: React.FC = () => {
  const formik = useFormik<{
    customMilesPercentage: MilesPercentage['value'];
    selectedMilesPercentage: MilesPercentage;
  }>({
    enableReinitialize: true,
    initialValues: {
      customMilesPercentage: 0,
      selectedMilesPercentage: milesPercentage[0]
    },
    validationSchema: StartContractSchema,
    onSubmit: (values) => {
      let payload = { percentage: values.selectedMilesPercentage.value / 100 };

      if (values.selectedMilesPercentage.id === 'others') {
        payload = {
          percentage: values.customMilesPercentage / 100
        };
      }

      console.log('payload', payload);
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
      <h2 className="text-xl pb-3">AladdinMiles Percentage</h2>
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
                          id="customMilesPercentage"
                          name="customMilesPercentage"
                          type="number"
                          label={percentage.description}
                          value={formik.values.customMilesPercentage}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          isInvalid={
                            formik.touched.customMilesPercentage &&
                            Boolean(formik.errors.customMilesPercentage)
                          }
                          errorMsg={formik.errors.customMilesPercentage}
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
          <NoLinkButton
            className="disabled:opacity-30 !h-auto !w-auto px-6 py-4 !rounded"
            disabled={isDisabled}
            type="submit"
          >
            Save and Continue
          </NoLinkButton>
        </div>
      </div>
    </form>
  );
};

export default StartContractForm;
