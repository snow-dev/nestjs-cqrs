import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserRepository } from '../repositories/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user';

export class GetUserQuery {}

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: UserRepository,
  ) {}

  async execute(): Promise<any> {
    console.log('Get all posts query handler');

    const users = await this.userRepository.getUsers('1');

    return Promise.resolve(users);
  }
}
