import { InvalidParamError } from '@/domain/errors';
import { User } from '@/domain/user/entity/user';

const makeSut = () => {
  const fakeDataUser = {
    name: 'Joe Doe',
    email: 'joedoe@gmail.com',
    password: '12348765',
  };

  const user = new User();

  return {
    user,
    fakeDataUser,
  };
};

describe('User', () => {
  it('Should return InvalidParamError if not receive name', () => {
    const { user, fakeDataUser } = makeSut();
    fakeDataUser.name = '';
    const test = user.build(fakeDataUser);
    expect(test.isLeft()).toEqual(true);
    expect(test.value).toEqual(new InvalidParamError('name'));
  });
});
