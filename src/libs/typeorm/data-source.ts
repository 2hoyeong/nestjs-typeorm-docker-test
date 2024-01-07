import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { MysqlTestConfig } from '../../common/config/mysql.config';
import { SeederOptions } from 'typeorm-extension';

config();

const configService = new ConfigService({ app: { env: 'test' }, database: { mysqlPoolSize: 10 } });
const mysqlConfig = new MysqlTestConfig(configService);

const options: DataSourceOptions & SeederOptions = {
  ...(mysqlConfig.createTypeOrmOptions() as DataSourceOptions),
  seeds: ['src/common/database/seeders/**/*{.ts,.js}'],
  factories: ['src/common/database/factories/**/*{.ts,.js}'],
  entities: ['src/common/entities/**/*{.ts,.js}'],
};

export default new DataSource(options);
