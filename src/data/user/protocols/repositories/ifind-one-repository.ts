import { userCreate, userStore } from '@/domain/user/contracts';

export interface IFindOneRepository {
  find: (data: IFindOneRepository.Input) => IFindOneRepository.Output;
}

export namespace IFindOneRepository {
  export type Input = { id: string };
  export type Output = Promise<userCreate | null>;
}
