import { ICreateUserUseCase } from '@/domain/user/use-cases';
import { ICreateRepository, IFindOneRepository } from '@/data/user/protocols/repositories';
import { User } from '@/domain/user/entity/user';
import { left, right } from '@/shared/error-handler/either';
import { AlreadyExistsError } from '@/domain/errors';

export class CreateUserUseCase implements ICreateUserUseCase {
  private readonly createRepository: ICreateRepository;
  private readonly findOneRepository: IFindOneRepository;
  constructor(createRepository: ICreateRepository, findOneRepository: IFindOneRepository) {
    this.createRepository = createRepository;
    this.findOneRepository = findOneRepository;
  }

  async perform(data: ICreateUserUseCase.Input): ICreateUserUseCase.Output {
    const build = new User().build(data);

    if (build.isLeft()) {
      return left(build.value);
    }
    const building = build.value;
    const exists = await this.findOneRepository.find({ id: building.id });

    if (exists) {
      return left(new AlreadyExistsError('user'));
    }

    const user = await this.createRepository.add(building);

    return right(user);
  }
}
