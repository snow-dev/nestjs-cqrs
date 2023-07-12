import { Injectable } from '@nestjs/common';

export interface Post {
  title: string;
  content: string;
}

@Injectable()
export class PostService {
  private readonly posts: Post[] = [];
  create(post: Post): Post {
    this.posts.push(post);
    return post;
  }

  findById(id: number): Post {
    return this.posts[id];
  }
}
