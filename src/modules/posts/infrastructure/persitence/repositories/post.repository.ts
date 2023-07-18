import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

class PostModel {
  title: string;
  content: string;
}

@Injectable()
export class PostRepository extends Repository<PostModel> {
  async find() {
    const query = this.createQueryBuilder('post');
    return await query.getMany();
  }

  async findAll() {
    console.log('Get all posts repository');

    const query = this.createQueryBuilder('post');
    return await query.getMany();
  }
}
