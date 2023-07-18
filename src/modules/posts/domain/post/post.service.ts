import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreatePostCommand } from '../../infrastructure/persitence/commands/createPostCommand.command';
import { UserEntity } from '../../infrastructure/persitence/entities/user';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../../infrastructure/persitence/repositories/user.repository';

export interface PostInterface {
  title: string;
  content: string;
}

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: UserRepository,
    private readonly commandBus: CommandBus,
  ) {}

  async createPost(post: PostInterface) {
    return this.commandBus.execute(
      new CreatePostCommand(post.title, post.content),
    );
  }
}
