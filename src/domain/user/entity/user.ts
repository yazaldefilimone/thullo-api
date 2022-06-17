import { InvalidParamError } from '@/domain/errors/InvalidParamError';
import { buildResponse } from './protocols';
import { user } from '@/domain/user/protocols';

import { Either, left, right } from '@/shared/error-handler/either';
import { isValidEmail, isValidName } from '@/shared/validators';

import { v4 as uuid } from 'uuid';

export class User {
  public isValidEmail(email: string): Either<InvalidParamError, string> {
    return isValidEmail(email) ? right(email) : left(new InvalidParamError(email));
  }

  public isValidName(name: string): Either<InvalidParamError, string> {
    return isValidName(name) ? right(name) : left(new InvalidParamError(name));
  }

  public build(user: user): buildResponse {
    const userValid = {
      name: this.isValidName(user.name),
      email: this.isValidEmail(user.email),
    };
    if (userValid.email.isLeft()) {
      return left(userValid.email.value);
    }
    if (userValid.name.isLeft()) {
      return left(userValid.name.value);
    }

    return right({
      id: uuid(),
      name: userValid.name.value as string,
      email: userValid.email.value as string,
    });
  }
}
