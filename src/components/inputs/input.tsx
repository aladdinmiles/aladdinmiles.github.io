import {
  forwardRef,
  ReactElement,
  FocusEventHandler,
  InputHTMLAttributes,
  useState
} from 'react';

import classNames from '@/utils/classNames';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  className?: string;
  isInvalid?: boolean;
  errorMsg?: string;
  required?: boolean;
  type?: string;
  isDisabled?: boolean;
  leftAffix?: string | ReactElement;
  rightAffix?: string | ReactElement;
  showBorder?: boolean;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  tip?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    id,
    className = '',
    isInvalid,
    errorMsg,
    required,
    isDisabled,
    tip,
    leftAffix,
    rightAffix,
    onFocus,
    onBlur,
    showBorder = true,
    ...rest
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      {label && (
        <label className="text-sm text-gray-700" htmlFor={id}>
          {label}
          {required && <sup className="text-primary-500 pl-1">*</sup>}
        </label>
      )}
      <div
        className={classNames(
          label ? 'mt-1' : '',
          !showBorder ? '' : 'shadow-sm',
          'bg-white relative flex rounded-md'
        )}
      >
        {leftAffix && (
          <span
            className={classNames(
              !showBorder ? '!border-none pl-3' : 'px-3',
              isInvalid
                ? '!border-error-600'
                : isFocused
                ? '!border-secondary-200'
                : 'border-gray-100',
              `bg-gray-25 rounded-md rounded-r-none border-r-0 flex items-center border select-none text-black sm:text-sm`
            )}
          >
            {leftAffix}
          </span>
        )}

        <input
          ref={ref}
          id={id}
          required={required}
          disabled={isDisabled}
          onFocus={(e) => {
            setIsFocused(true);
            if (typeof onFocus === 'function') onFocus(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            if (typeof onBlur === 'function') onBlur(e);
          }}
          className={classNames(
            className,
            !showBorder ? '!border-none' : '',
            isDisabled ? 'cursor-not-allowed' : '',
            isInvalid ? '!border-error-600' : 'border-gray-100',
            leftAffix ? 'rounded-l-none' : '',
            rightAffix ? 'rounded-r-none' : '',
            `relative block w-full appearance-none rounded-md border px-3 py-2 text-black placeholder-gray-200 placeholder:font-light focus:outline-none focus:border-secondary-200 sm:text-sm`
          )}
          {...rest}
        />

        {rightAffix ? (
          <span
            className={classNames(
              !showBorder ? '!border-none pr-3' : 'px-3',
              isInvalid
                ? '!border-error-600'
                : isFocused
                ? '!border-secondary-200'
                : 'border-gray-100',
              `bg-gray-25 rounded-md rounded-l-none border-l-0 flex items-center border select-none text-black sm:text-sm`
            )}
          >
            {rightAffix}
          </span>
        ) : null}
      </div>
      {(tip || isInvalid) && (
        <p
          className={classNames(
            isInvalid ? 'text-error-600' : 'text-gray-600',
            'text-sm pt-1.5'
          )}
        >
          {isInvalid ? errorMsg : tip}
        </p>
      )}
    </div>
  );
});

export default Input;

Input.displayName = 'Input';
