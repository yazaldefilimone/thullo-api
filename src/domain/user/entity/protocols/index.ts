import { InvalidParamError } from '@/domain/errors/InvalidParamError';
import { Either } from '@/shared/error-handler/either';
import { userStore } from '@/domain/user/contracts';

type buildError = InvalidParamError;

export type buildResponse = Either<buildError, Omit<userStore, 'created_at'>>;
