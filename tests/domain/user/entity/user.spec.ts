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

  it('Should return InvalidParamError if not receive email', () => {
    const { user, fakeDataUser } = makeSut();
    fakeDataUser.email = '';
    const test = user.build(fakeDataUser);
    expect(test.isLeft()).toEqual(true);
    expect(test.value).toEqual(new InvalidParamError('email'));
  });

  it('Should return InvalidParamError if not receive password', () => {
    const { user, fakeDataUser } = makeSut();
    fakeDataUser.password = '';
    const test = user.build(fakeDataUser);
    expect(test.isLeft()).toEqual(true);
    expect(test.value).toEqual(new InvalidParamError('password'));
  });

  it('Should return user with id if  receive data correct', () => {
    const { user, fakeDataUser } = makeSut();
    const test = user.build(fakeDataUser);
    expect(test.isRight()).toEqual(true);
    expect(test.value).toHaveProperty('id');
  });
});
