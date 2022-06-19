import { AlreadyExistsError } from '@/domain/errors/AlreadyExistsError';

function makeSut() {
  const alreadyExistsError = AlreadyExistsError;
  return {
    alreadyExistsError,
  };
}
describe('AlreadyExistsError', () => {
  it('Should return error if call class name', () => {
    const { alreadyExistsError } = makeSut();
    expect(new alreadyExistsError('name')).toEqual(new alreadyExistsError('name'));
  });
});
