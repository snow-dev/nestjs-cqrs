import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    type: 'oracle',
    host: configService.get('ORACLE_HOST'),
    port: configService.get('ORACLE_PORT'),
    username: configService.get('ORACLE_USERNAME'),
    password: configService.get('ORACLE_PASSWORD'),
    synchronize: false,
    logging: false,
    serviceName: configService.get('ORACLE_SERVICENAME'),
    connectString: configService.get('ORACLE_CONNECTSTRING'),
    autoLoadEntities: true,
  }),
  inject: [ConfigService],
};
