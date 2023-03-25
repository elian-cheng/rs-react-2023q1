import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Modal from 'components/Modal/Modal';
import React, { ChangeEvent, Component, createRef } from 'react';
import ReactLogo from '../../../../assets/images/react-logo.png';
import Radio from '../Radio/Radio';
import Select from '../Select/Select';
import Switcher from '../Switcher/Switcher';
import Validator from '../Validator/Validator';

interface IValidInput {
  isValidDate: boolean;
  isValidName: boolean;
  isValidImage: boolean;
  isValidDelivery: boolean;
  isValidCall: boolean;
  isValidConsent: boolean;
}

interface IErrorMessages {
  dateErrorMessage: string;
  nameErrorMessage: string;
  imageErrorMessage: string;
  deliveryErrorMessage: string;
  callErrorMessage: string;
  consentErrorMessage: string;
}

interface IValidation {
  validityInputs: IValidInput;
  errorMessages: IErrorMessages;
}

const VALID_STATE: IValidation = {
  validityInputs: {
    isValidDate: true,
    isValidName: true,
    isValidImage: true,
    isValidDelivery: true,
    isValidCall: true,
    isValidConsent: true,
  },
  errorMessages: {
    dateErrorMessage: '',
    nameErrorMessage: '',
    imageErrorMessage: '',
    deliveryErrorMessage: '',
    callErrorMessage: '',
    consentErrorMessage: '',
  },
};
export interface IFormData {
  name: string;
  date: string;
  delivery: string;
  call: string;
  notifications: string;
  image: string;
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
  modalIsShown: boolean;
  validityInputs: IValidInput;
  errorMessages: IErrorMessages;
}
export default class Form extends Component<IFormProps, IFormState> {
  formRef: IFormRef;

  constructor(props: IFormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalState = this.handleModalState.bind(this);
    this.state = { ...VALID_STATE, modalIsShown: false };
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

  async handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      await this.handleValidation();
      if (!Object.values(this.state.validityInputs).every(Boolean)) {
        this.setState((prevState) => ({ ...prevState }));
        return;
      }
      this.createCard();
      this.resetForm();
      this.setState({ modalIsShown: true });
    } catch (e) {
      console.log(e);
    }
  }

  createCard() {
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
  }

  resetForm() {
    this.formRef.common.current?.reset();
  }

  async handleValidation() {
    try {
      await this.validateName();
      await this.validateDate();
      await this.validateImage();
      await this.validateDelivery();
      await this.validateCall();
      await this.validateConsent();
    } catch (e) {
      console.log(e);
    }
  }

  async validateName() {
    const name = this.formRef.name.current?.value;
    const { isValid, errorMessage } = Validator.validateName(name || '');
    this.setNewValueToState('isValidName', 'nameErrorMessage', isValid, errorMessage);
  }

  async validateDate() {
    const date = this.formRef.date.current?.value;
    const { isValid, errorMessage } = Validator.validateDate(date || '');
    this.setNewValueToState('isValidDate', 'dateErrorMessage', isValid, errorMessage);
  }

  async validateImage() {
    const image = this.formRef.image.current?.files;
    const { isValid, errorMessage } = Validator.validateImage(image || null);
    this.setNewValueToState('isValidImage', 'imageErrorMessage', isValid, errorMessage);
  }

  async validateDelivery() {
    const delivery = this.formRef.delivery.current?.value;
    const { isValid, errorMessage } = Validator.validateDelivery(delivery || '');
    this.setNewValueToState('isValidDelivery', 'deliveryErrorMessage', isValid, errorMessage);
  }

  async validateCall() {
    const callYes = this.formRef.callYes.current?.checked;
    const callNo = this.formRef.callNo.current?.checked;
    const { isValid, errorMessage } = Validator.validateCall(callYes || callNo || false);
    this.setNewValueToState('isValidCall', 'callErrorMessage', isValid, errorMessage);
  }

  async validateConsent() {
    const consent = this.formRef.consent.current?.checked;
    const { isValid, errorMessage } = Validator.validateConsent(consent || false);
    this.setNewValueToState('isValidConsent', 'consentErrorMessage', isValid, errorMessage);
  }

  setNewValueToState(
    validity: keyof IValidInput,
    errorMessage: keyof IErrorMessages,
    isValid: boolean,
    errorMessageValue: string
  ) {
    this.setState((prevState) => {
      const validityInputs = Object.assign(prevState.validityInputs);
      validityInputs[validity] = isValid;
      const errorMessages = Object.assign(prevState.errorMessages);
      errorMessages[errorMessage] = errorMessageValue;
      return {
        ...prevState,
        validityInputs,
        errorMessages,
      };
    });
  }

  render() {
    const { name, date, delivery, callYes, callNo, notifications, image, consent } = this.formRef;
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit} ref={this.formRef.common}>
          <Input
            label="Name:"
            ref={name}
            errorMessage={this.state.errorMessages.nameErrorMessage}
            isValid={this.state.validityInputs.isValidName}
            input={{
              id: 'name',
              type: 'text',
            }}
          />
          <Input
            label="Delivery date:"
            ref={date}
            errorMessage={this.state.errorMessages.dateErrorMessage}
            isValid={this.state.validityInputs.isValidDate}
            input={{
              id: 'date',
              type: 'date',
            }}
          />
          <Select
            refTo={delivery}
            errorMessage={this.state.errorMessages.deliveryErrorMessage}
            isValid={this.state.validityInputs.isValidDelivery}
          />
          <p className="form-info">Send the payment proof (photo):</p>
          <Input
            label=""
            ref={image}
            errorMessage={this.state.errorMessages.imageErrorMessage}
            isValid={this.state.validityInputs.isValidImage}
            input={{
              id: 'image',
              type: 'file',
            }}
          />
          <Radio
            callYes={callYes}
            callNo={callNo}
            errorMessage={this.state.errorMessages.callErrorMessage}
            isValid={this.state.validityInputs.isValidCall}
          />
          <Switcher refTo={notifications} />
          <Input
            label="Agree to terms & conditions"
            ref={consent}
            errorMessage={this.state.errorMessages.consentErrorMessage}
            isValid={this.state.validityInputs.isValidConsent}
            input={{
              id: 'consent',
              type: 'checkbox',
            }}
          />
          <Button type="submit" className="form__button">
            Submit
          </Button>
        </form>
        <Modal isActive={this.state.modalIsShown} handleModal={this.handleModalState} />
      </>
    );
  }
}
