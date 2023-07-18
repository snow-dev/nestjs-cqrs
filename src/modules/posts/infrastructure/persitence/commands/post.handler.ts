import {
  CommandHandler,
  ICommandHandler,
  IQueryHandler,
  QueryHandler,
} from '@nestjs/cqrs';

import { CreatePostCommand } from './createPostCommand.command';
import { PostRepository } from '../repositories/post.repository';
import { PostInterface } from '../../../domain/post/post.service';

@CommandHandler(CreatePostCommand)
export class PostHandler implements ICommandHandler<CreatePostCommand> {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(command: CreatePostCommand): Promise<PostInterface[]> {
    console.log('command: ', command);
    // const { title, content } = command;

    const post = await this.postRepository.find();

    return Promise.resolve(post);
  }
}

export class GetPostsQuery {}

@QueryHandler(GetPostsQuery)
export class GetPostsHandler implements IQueryHandler<GetPostsQuery> {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(): Promise<PostInterface[]> {
    console.log('Get all posts query handler');

    const post = await this.postRepository.findAll();

    return Promise.resolve(post);
  }
}
