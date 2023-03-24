import React, { InputHTMLAttributes } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

export interface IInputProps {
  label: string;
  input: IInput;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  return (
    <div className="input">
      <label htmlFor={props.input.id} className="label-text">
        {props.label}
      </label>
      <input ref={ref} {...props.input} />
    </div>
  );
});
export default Input;
