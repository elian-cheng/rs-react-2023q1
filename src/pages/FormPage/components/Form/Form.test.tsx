import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Form from './Form';
import { act } from 'react-dom/test-utils';

export const mockInvalidForm = () => {
  return [
    {
      name: 'Вася',
      date: '2024-03-25',
      delivery: 'default',
      notifications: 'No',
      image: '',
      consent: 'Yes',
      call: 'Yes',
    },
    {
      name: 'Testing',
      date: '2024-03-25',
      delivery: 'Courier',
      notifications: 'No',
      image: '',
      consent: 'Yes',
      call: 'No',
    },
    {
      name: 'Testing',
      date: '2023-02-05',
      delivery: 'Express',
      notifications: 'No',
      image: '',
      consent: 'Yes',
      call: 'No',
    },
  ];
};

describe('Form', () => {
  let form: HTMLElement;
  let name: HTMLInputElement;
  let date: HTMLInputElement;
  let delivery: HTMLSelectElement;
  let image: HTMLInputElement;
  let consent: HTMLInputElement;
  let call: HTMLInputElement;
  let modal: HTMLElement | null;
  const mockInvalid = mockInvalidForm();

  beforeEach(async () => {
    act(() => {
      const mock = jest.fn();
      render(<Form setFormState={mock} />);
    });
    await waitFor(() => {
      form = screen.getByTestId('form');
      name = screen.getByRole('textbox', { name: /Name:/i });
      date = document.getElementById('date') as HTMLInputElement;
      image = document.getElementById('image') as HTMLInputElement;
      consent = document.getElementById('consent') as HTMLInputElement;
      call = document.getElementById('call-yes') as HTMLInputElement;
      delivery = screen.getByRole('combobox');
      modal = screen.queryByText(/Your order was successfully submitted!/i);
    });
  });

  const createCard = (
    nameValue: string,
    dateValue: string,
    deliveryValue: string,
    imageValue: string
  ) => {
    userEvent.type(name, nameValue);
    fireEvent.change(date, { target: { value: dateValue } });
    fireEvent.change(delivery, { target: { value: deliveryValue } });
    fireEvent.change(image, { target: { value: imageValue } });
    fireEvent.click(screen.getByText(/Yes, I need a call/i));
    fireEvent.click(consent);
    userEvent.click(screen.getByText(/Submit/i));
  };

  it('should render the component correctly', () => {
    expect(form).toBeInTheDocument();
    expect(document.querySelectorAll('input').length).toBe(7);
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toBe(2);
    const radios = screen.getAllByRole('radio');
    expect(radios.length).toBe(2);
  });

  it('should submit the valid form', () => {
    act(() => {
      createCard('Testing', '2025-05-14', 'Express', '');
    });
    expect(name.value).toBe('Testing');
    expect(date.value).toBe('2025-05-14');
    expect(delivery.value).toBe('Express');
    expect(image.value).toBe('');
    expect(consent.value).toBe('on');
    expect(call.value).toBe('Yes');
  });

  it('should not submit the invalid form', () => {
    let data = mockInvalid[0];
    act(() => {
      delivery.value = data.delivery;
      image.value = data.image;
      consent.value = data.consent;
      userEvent.type(name, data.name);
      userEvent.type(date, data.date);
      fireEvent.submit(form);
    });
    expect(modal).not.toBeInTheDocument();

    data = mockInvalid[1];
    act(() => {
      name.value = '';
      delivery.value = data.delivery;
      image.value = data.image;
      userEvent.type(name, data.name);
      userEvent.clear(date);
      userEvent.click(consent);
      fireEvent.submit(form);
    });
    expect(modal).not.toBeInTheDocument();

    data = mockInvalid[2];
    act(() => {
      delivery.value = data.delivery;
      image.value = data.image;
      userEvent.clear(name);
      userEvent.type(date, data.date);
      userEvent.click(consent);
      fireEvent.submit(form);
    });
    expect(modal).not.toBeInTheDocument();
  });
});
