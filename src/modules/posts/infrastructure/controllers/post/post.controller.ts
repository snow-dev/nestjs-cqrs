import { Controller, Get } from '@nestjs/common';
import { Post, PostService } from '../../../domain/post/post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Get()
  async createPost() {
    const post: Post = {
      title: 'Some title',
      content: 'Ibtersting content',
    };
    return this.postService.create(post);
  }
}
