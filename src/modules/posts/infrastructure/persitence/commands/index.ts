import { PostHandler, GetPostsHandler } from './post.handler';
import { GetUserHandler } from './user.handler';

export const CommandHandlers = [PostHandler];
export const QueryHandlers = [GetPostsHandler, GetUserHandler];
