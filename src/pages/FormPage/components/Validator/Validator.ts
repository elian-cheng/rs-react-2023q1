export interface IValidationResult {
  isValid: boolean;
  errorMessage: string;
}

interface IValidator {
  validateName: (name: string) => IValidationResult;
  validateDate: (date: string) => IValidationResult;
  validateImage: (image: FileList | null) => IValidationResult;
  validateDelivery: (delivery: string) => IValidationResult;
  validateCall: (call: boolean) => IValidationResult;
  validateConsent: (consent: boolean) => IValidationResult;
}

const Validator: IValidator = {
  validateName: (name: string) => {
    const isValidLength = /^.{5,20}$/.test(name ? name : '');
    const isValidLetters = /^[a-zA-Z]+$/.test(name ? name.replace(/ /g, '') : '');

    if (!isValidLength) {
      return { isValid: false, errorMessage: 'Name must be from 5 to 20 symbols' };
    }

    if (!isValidLetters) {
      return { isValid: false, errorMessage: 'Name must contain only English letters' };
    }

    return { isValid: true, errorMessage: '' };
  },

  validateDate: (date: string) => {
    if (date?.length === 0) {
      return { isValid: false, errorMessage: 'This field is required' };
    }

    if (Date.parse(date) < Date.now()) {
      return { isValid: false, errorMessage: 'Please, select a date in the future' };
    }

    return { isValid: true, errorMessage: '' };
  },

  validateImage: (image: FileList | null) => {
    if (!image || image.length === 0) {
      return { isValid: false, errorMessage: 'This field is required' };
    }

    const allowedTypes = ['image/png', 'image/jpeg', 'image/gif'];

    if (image && image[0] && !allowedTypes.includes(image[0].type)) {
      return {
        isValid: false,
        errorMessage: 'Image must be in png, jpeg or gif format',
      };
    }

    return { isValid: true, errorMessage: '' };
  },

  validateDelivery: (delivery: string) => {
    if (delivery === 'default') {
      return { isValid: false, errorMessage: 'This field is required' };
    }

    return { isValid: true, errorMessage: '' };
  },

  validateCall: (call: boolean) => {
    if (!call) {
      return { isValid: false, errorMessage: 'Please, select an option' };
    }

    return { isValid: true, errorMessage: '' };
  },

  validateConsent: (consent: boolean) => {
    if (!consent) {
      return { isValid: false, errorMessage: 'Please, give your consent to proceed' };
    }

    return { isValid: true, errorMessage: '' };
  },
};

export default Validator;
