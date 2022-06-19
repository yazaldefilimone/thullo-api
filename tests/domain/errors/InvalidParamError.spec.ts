import { InvalidParamError } from '@/domain/errors';

function makeSut() {
  const invalidParamError = InvalidParamError;
  return {
    invalidParamError,
  };
}
describe('AlreadyExistsError', () => {
  it('Should return error if call class name', () => {
    const { invalidParamError } = makeSut();
    expect(new invalidParamError('name')).toEqual(new invalidParamError('name'));
  });
});
