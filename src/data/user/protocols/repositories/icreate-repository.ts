import { userCreate, userStore } from '@/domain/user/contracts';

export interface ICreateRepository {
  add: (data: ICreateRepository.Input) => ICreateRepository.Output;
}

export namespace ICreateRepository {
  export type Input = Omit<userStore, 'created_at'>;
  export type Output = Promise<{ id: string }>;
}
