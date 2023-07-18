import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from '../posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from '../config/ormconfig/ormconfig.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
