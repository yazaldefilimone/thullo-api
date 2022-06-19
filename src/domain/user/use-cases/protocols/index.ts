import { AlreadyExistsError } from '@/domain/errors';
import { InvalidParamError } from '@/domain/errors/InvalidParamError';
import { Either } from '@/shared/error-handler/either';

type createUserProtocolsFailed = InvalidParamError | AlreadyExistsError;
export type createUserProtocols = Either<createUserProtocolsFailed, { id: string }>;
