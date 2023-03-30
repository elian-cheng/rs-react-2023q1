import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';
import { act } from 'react-dom/test-utils';

interface ITestInput {
  id: string;
  name: 'name' | 'image' | 'date' | 'delivery' | 'call' | 'notifications' | 'consent';
  value: string;
  type: string;
}

describe('Input', () => {
  const input: ITestInput = {
    id: 'input-id',
    name: 'name',
    value: 'test value',
    type: 'text',
  };

  const label = 'Test label';

  const validationRules = {};

  const register = jest.fn();

  it('shoult render the component correctly', () => {
    const error = undefined;
    act(() => {
      render(
        <Input
          label={label}
          name={input.name}
          input={input}
          validationRules={validationRules}
          register={register}
          error={error}
        />
      );
    });

    const inputElement = document.querySelector('input[type="text"]');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', input.id);
    expect(inputElement).toHaveAttribute('name', input.name);
    expect(inputElement).toHaveAttribute('value', input.value);

    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', input.id);
  });

  it('should display an error message if there is an error', async () => {
    const errorMessage = 'Test error message';
    const error = { type: 'required', message: errorMessage };

    act(() => {
      render(
        <Input
          label={label}
          name={input.name}
          input={input}
          validationRules={validationRules}
          register={register}
          error={error}
        />
      );
    });

    const inputElement = screen.getByLabelText(label);
    expect(inputElement).toHaveClass('input-error');

    const errorMessageElement = screen.getByTestId('inputError');
    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement).toHaveTextContent(errorMessage);

    expect(inputElement).toHaveValue(input.value);
  });
});
