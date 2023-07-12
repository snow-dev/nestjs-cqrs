import { Module } from '@nestjs/common';
import { PostController } from './infrastructure/controllers/post/post.controller';
import { PostService } from './domain/post/post.service';
import {
  CreatePostHandler,
  GetPostHandler,
} from './infrastructure/persitence/commands/handler';

@Module({
  controllers: [PostController],
  providers: [PostService, ...CreatePostHandler, ...GetPostHandler],
})
export class PostsModule {}
