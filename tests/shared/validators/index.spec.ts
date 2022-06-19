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
});
