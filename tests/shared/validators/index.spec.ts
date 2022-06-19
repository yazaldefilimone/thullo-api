import { isValidPassword, isValidName, isValidEmail } from '@/shared/validators';

function makeSut() {
  const isValid = {
    password: isValidPassword,
    name: isValidName,
    email: isValidEmail,
  };
  const fakeData = {
    name: 'Joe Doe',
    email: 'joedoe@gmail.com',
    password: 'joedoepass',
  };
  return {
    isValid,
    fakeData,
  };
}

describe('Validation', () => {
  it('Should return false if not receive correct name', () => {
    const { isValid, fakeData } = makeSut();
    fakeData.name = '';
    const response = isValid.name(fakeData.name);
    expect(response).toEqual(false);
  });

  it('Should return true if  receive correct name', () => {
    const { isValid, fakeData } = makeSut();
    const response = isValid.name(fakeData.name);
    expect(response).toEqual(true);
  });

  it('Should return false if not receive correct email', () => {
    const { isValid, fakeData } = makeSut();
    fakeData.email = 'fake@g';
    const response = isValid.email(fakeData.email);
    expect(response).toEqual(false);
  });

  it('Should return true if  receive correct email', () => {
    const { isValid, fakeData } = makeSut();
    const response = isValid.email(fakeData.email);
    expect(response).toEqual(true);
  });

  it('Should return false if not receive correct password', () => {
    const { isValid, fakeData } = makeSut();
    fakeData.password = 'fake';
    const response = isValid.password(fakeData.password);
    expect(response).toEqual(false);
  });

  it('Should return true if  receive correct password', () => {
    const { isValid, fakeData } = makeSut();
    const response = isValid.password(fakeData.password);
    expect(response).toEqual(true);
  });
});
