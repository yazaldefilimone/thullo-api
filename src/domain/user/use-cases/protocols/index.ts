import { AlreadyExistsError } from '@/domain/errors';
import { InvalidParamError } from '@/domain/errors/InvalidParamError';
import { Either } from '@/shared/error-handler/either';
import { userCreate } from '@/domain/user/contracts';

type createUserProtocolsFailed = InvalidParamError | AlreadyExistsError;
export type createUserProtocols = Either<createUserProtocolsFailed, userCreate>;
