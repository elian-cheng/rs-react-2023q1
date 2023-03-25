import React, { InputHTMLAttributes } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

export interface IInputProps {
  label: string;
  input: IInput;
  errorMessage: string;
  isValid: boolean;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const { label, input, errorMessage, isValid } = props;
  return (
    <>
      <div className="input">
        <label htmlFor={input.id} className="label-text">
          {label}
        </label>
        <input
          ref={ref}
          name={input.id}
          {...props.input}
          className={!isValid ? 'input-error' : ''}
        />
      </div>
      <p className="error-message">{errorMessage}</p>
    </>
  );
});
export default Input;
