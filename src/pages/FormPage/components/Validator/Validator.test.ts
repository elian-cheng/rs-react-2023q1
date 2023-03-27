import Validator, { IValidationResult } from './Validator';

describe('Validator', () => {
  describe('validateName', () => {
    it('returns an error message if the name is too short', () => {
      const result: IValidationResult = Validator.validateName('abc');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('Name must be from 5 to 20 symbols');
    });

    it('returns an error message if the name is too long', () => {
      const result: IValidationResult = Validator.validateName('abcdefghijklmnopqrstuvwxyz');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('Name must be from 5 to 20 symbols');
    });

    it('returns an error message if the name contains non-English letters', () => {
      const result: IValidationResult = Validator.validateName('Василий');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('Name must contain only English letters');
    });

    it('returns a valid result if the name is valid', () => {
      const result: IValidationResult = Validator.validateName('John Doe');
      expect(result.isValid).toBe(true);
      expect(result.errorMessage).toBe('');
    });
  });

  describe('validateDate', () => {
    it('returns an error message if the date is not provided', () => {
      const result: IValidationResult = Validator.validateDate('');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('This field is required');
    });

    it('returns an error message if the date is in the past', () => {
      const result: IValidationResult = Validator.validateDate('2022-01-01');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('Please, select a date in the future');
    });

    it('returns a valid result if the date is in the future', () => {
      const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const result: IValidationResult = Validator.validateDate(tomorrow.toISOString());
      expect(result.isValid).toBe(true);
      expect(result.errorMessage).toBe('');
    });
  });

  describe('validateImage', () => {
    it('returns an error message if no image is provided', () => {
      const result: IValidationResult = Validator.validateImage(null);
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('This field is required');
    });

    it('returns an error message if the image is not in a valid format', () => {
      const invalidFile = { type: 'text/plain' };
      const result: IValidationResult = Validator.validateImage([
        invalidFile,
      ] as unknown as FileList);
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('Image must be in png, jpeg or gif format');
    });

    it('returns a valid result if the image is in a valid format', () => {
      const image = new File([''], 'valid.png', { type: 'image/png' });
      const fileList: FileList = {
        length: 1,
        item: () => image,
        [Symbol.iterator]: function* () {
          yield image;
        },
      };
      const result: IValidationResult = Validator.validateImage(fileList);
      expect(result.isValid).toBe(true);
      expect(result.errorMessage).toBe('');
    });
  });

  describe('validateDelivery', () => {
    it('returns an error message if no delivery option is selected', () => {
      const result: IValidationResult = Validator.validateDelivery('default');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('This field is required');
    });

    it('returns a valid result if a delivery option is selected', () => {
      const result: IValidationResult = Validator.validateDelivery('pickup');
      expect(result.isValid).toBe(true);
      expect(result.errorMessage).toBe('');
    });
  });

  describe('validateCall', () => {
    it('returns an error message if no call option is selected', () => {
      const result: IValidationResult = Validator.validateCall(false);
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('Please, select an option');
    });

    it('returns a valid result if a call option is selected', () => {
      const result: IValidationResult = Validator.validateCall(true);
      expect(result.isValid).toBe(true);
      expect(result.errorMessage).toBe('');
    });
  });

  describe('validateConsent', () => {
    it('returns an error message if consent is not given', () => {
      const result: IValidationResult = Validator.validateConsent(false);
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('Please, give your consent to proceed');
    });

    it('returns a valid result if consent is given', () => {
      const result: IValidationResult = Validator.validateConsent(true);
      expect(result.isValid).toBe(true);
      expect(result.errorMessage).toBe('');
    });
  });
});
