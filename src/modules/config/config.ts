import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    apiKey: process.env.API_KEY,
    postgres: {
      type: 'oracle',
      name: 'default',
      host: process.env.DB_HOST,
      port: parseInt(process.env.ORACLE_PORT, 10),
      user: process.env.ORACLE_USERNAME,
      password: process.env.ORACLE_PASSWORD,
      dbName: process.env.ORACLE_SERVICENAME,
      synchronize: false,
      logging: false,
      serviceName: process.env.ORACLE_SERVICENAME,
      connectString: process.env.ORACLE_CONNECTSTRING,
      autoLoadEntities: true,
    },
  };
});
