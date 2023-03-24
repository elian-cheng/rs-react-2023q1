import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import React, { Component, createRef } from 'react';
import ReactLogo from '../../../../assets/images/react-logo.png';
import Input from '../Input/Input';
import Radio from '../Radio/Radio';
import Select from '../Select/Select';
import Switcher from '../Switcher/Switcher';

export interface IFormData {
  name: string;
  date: string;
  delivery: string;
  call: string;
  notifications: string;
  image: string | null;
  consent: string;
}

export interface IFormRef {
  common: React.RefObject<HTMLFormElement>;
  name: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  delivery: React.RefObject<HTMLSelectElement>;
  notifications: React.RefObject<HTMLInputElement>;
  callYes: React.RefObject<HTMLInputElement>;
  callNo: React.RefObject<HTMLInputElement>;
  image: React.RefObject<HTMLInputElement>;
  consent: React.RefObject<HTMLInputElement>;
}

export interface IFormProps {
  setFormState: (state: IFormData) => void;
}

export interface IFormState {
  buttonIsDisabled: boolean;
  modalIsShown: boolean;
  errors: string[];
}

export default class Form extends Component<IFormProps, IFormState> {
  formRef: IFormRef;

  constructor(props: IFormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalState = this.handleModalState.bind(this);
    this.state = {
      buttonIsDisabled: false,
      modalIsShown: false,
      errors: [],
    };
    this.formRef = {
      common: createRef(),
      name: createRef(),
      date: createRef(),
      delivery: createRef(),
      notifications: createRef(),
      callYes: createRef(),
      callNo: createRef(),
      image: createRef(),
      consent: createRef(),
    };
  }

  handleModalState() {
    this.setState({
      modalIsShown: !this.state.modalIsShown,
    });
  }

  async handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const {
      name: nameRef,
      date: dateRef,
      delivery: deliveryRef,
      notifications: notificationsRef,
      callYes: callYesRef,
      image: imageRef,
      consent: consentRef,
    } = this.formRef;
    const name = nameRef.current?.value || '';
    const date = dateRef.current?.value || '';
    const delivery = deliveryRef.current?.value || '';
    const notifications = notificationsRef.current?.checked ? 'Yes' : 'No';
    const call = callYesRef.current?.checked ? 'Yes' : 'No';
    const consent = consentRef.current?.checked ? 'Yes' : 'No';
    const image = imageRef.current?.files?.length
      ? URL.createObjectURL(imageRef.current.files[0])
      : ReactLogo;
    this.props.setFormState({ name, date, delivery, notifications, call, image, consent });
    this.setState({ modalIsShown: true });
  }

  render() {
    const { buttonIsDisabled } = this.state;
    const { name, date, delivery, callYes, callNo, notifications, image, consent } = this.formRef;
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <Input
            label="Name:"
            ref={name}
            input={{
              id: 'name',
              type: 'text',
            }}
          />
          <Input
            label="Delivery date:"
            ref={date}
            input={{
              id: 'date',
              type: 'date',
            }}
          />
          <Select refTo={delivery} />
          <p className="form-info">Send the payment proof (photo):</p>
          <Input
            label=""
            ref={image}
            input={{
              id: 'image',
              type: 'file',
            }}
          />
          <Radio callYes={callYes} callNo={callNo} />
          <Switcher refTo={notifications} />
          <Input
            label="Agree to terms & conditions"
            ref={consent}
            input={{
              id: 'consent',
              type: 'checkbox',
            }}
          />
          <Button disabled={buttonIsDisabled} type="submit" className="form__button">
            Submit
          </Button>
        </form>
        <Modal isActive={this.state.modalIsShown} handleModal={this.handleModalState} />
      </>
    );
  }
}
