import { InvalidParamError } from '@/domain/errors/InvalidParamError';
import { buildResponse } from './protocols';
import { user } from '@/domain/user/contracts';

import { Either, left, right } from '@/shared/error-handler/either';
import { isValidEmail, isValidName, isValidPassword } from '@/shared/validators';

import { v4 as uuid } from 'uuid';

export class User {
  public isValidEmail(email: string): Either<InvalidParamError, string> {
    return isValidEmail(email) ? right(email) : left(new InvalidParamError('email'));
  }

  public isValidName(name: string): Either<InvalidParamError, string> {
    return isValidName(name) ? right(name) : left(new InvalidParamError('name'));
  }

  public isValidPassword(password: string): Either<InvalidParamError, string> {
    return isValidPassword(password) ? right(password) : left(new InvalidParamError('password'));
  }

  public build(user: user): buildResponse {
    const userValid = {
      name: this.isValidName(user.name),
      email: this.isValidEmail(user.email),
      password: this.isValidPassword(user.password),
    };

    if (userValid.email.isLeft()) {
      return left(userValid.email.value);
    }
    if (userValid.name.isLeft()) {
      return left(userValid.name.value);
    }
    if (userValid.password.isLeft()) {
      return left(userValid.password.value);
    }

    return right({
      id: uuid(),
      name: userValid.name.value as string,
      email: userValid.email.value as string,
      password: userValid.email.value as string,
    });
  }
}
