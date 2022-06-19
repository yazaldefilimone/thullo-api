import { CreateUserUseCase } from '@/data/user/use-cases';

function makeSut() {
  const createUserUseCase = new CreateUserUseCase();
  return {
    createUserUseCase,
  };
}
describe('CreateUserUseCase', () => {
  it('Should return error if call class name', () => {
    const { createUserUseCase } = makeSut();
    expect(createUserUseCase).toBeInstanceOf(CreateUserUseCase);
  });
});
