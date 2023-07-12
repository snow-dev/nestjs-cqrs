import {
  CommandHandler,
  ICommandHandler,
  IQueryHandler,
  QueryHandler,
} from '@nestjs/cqrs';
import { CreatePostCommand } from './createPostCommand.command';
import { PostService } from '../../../domain/post/post.service';
import { GetPostQuery } from './getPostQuery';

@CommandHandler(CreatePostCommand)
export class CreatePostHandler implements ICommandHandler<CreatePostCommand> {
  constructor(private readonly postService: PostService) {}

  async execute(command: CreatePostCommand) {
    const { title, content } = command;
    return this.postService.create({ title, content });
  }
}

@QueryHandler(GetPostQuery)
export class GetPostHandler implements IQueryHandler<GetPostQuery> {
  constructor(private readonly postService: PostService) {}

  async execute(query: GetPostQuery) {
    const { id } = query;
    return this.postService.findById(id);
  }
}
