import { Module } from '@nestjs/common';
import { PostController } from './infrastructure/controllers/post/post.controller';
import { PostService } from './domain/post/post.service';
import {
  CommandHandlers,
  QueryHandlers,
} from './infrastructure/persitence/commands';
import { CqrsModule } from '@nestjs/cqrs';
import { PostRepository } from './infrastructure/persitence/repositories/post.repository';
import {
  getDataSourceToken,
  getRepositoryToken,
  TypeOrmModule,
} from '@nestjs/typeorm';
import { UserEntity } from './infrastructure/persitence/entities/user';
import { DataSource } from 'typeorm';
import { customRepository } from './infrastructure/persitence/repositories/user.repository';
import { GetUserHandler } from './infrastructure/persitence/commands/user.handler';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [PostController],
  providers: [
    ...CommandHandlers,
    ...QueryHandlers,
    PostService,
    PostRepository,
    GetUserHandler,
    {
      provide: getRepositoryToken(UserEntity),
      inject: [getDataSourceToken()],
      useFactory: (datasource: DataSource) =>
        datasource.getRepository(UserEntity).extend(customRepository),
    },
  ],
})
export class PostsModule {}
