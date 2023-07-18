import { Controller, Get, Post, Query } from '@nestjs/common';
import { PostInterface } from '../../../domain/post/post.service';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetPostsQuery } from '../../persitence/commands/post.handler';
import { UserEntity } from '../../persitence/entities/user';
import { GetUserQuery } from '../../persitence/commands/user.handler';

@Controller('post')
export class PostController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createPost(@Query() query: PostInterface) {
    return this.commandBus.execute(query);
  }

  @Get()
  async findAll(): Promise<PostInterface> {
    console.log('Get all posts controller');
    return this.queryBus.execute(new GetPostsQuery());
  }

  @Get('/users')
  async getAllUsers(): Promise<UserEntity[]> {
    console.log('Get all users controller');
    return this.queryBus.execute(new GetUserQuery());
  }
}
