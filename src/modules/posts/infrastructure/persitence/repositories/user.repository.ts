import { UserEntity } from '../entities/user';
import { Repository } from 'typeorm';

export interface UserRepository extends Repository<UserEntity> {
  getUsers(id: string): Promise<UserEntity | null>;
}

export const customRepository: Pick<UserRepository, any> = {
  getUsers(id: string): Promise<UserEntity | null> {
    console.log('Get all users repository');
    return this.findOne({ where: { id } });
  },
};
