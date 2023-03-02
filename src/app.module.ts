import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestConfigModule } from './common/config/config.module';
import { MysqlConfig, MysqlTestConfig } from './common/config/mysql.config';
import { HeartbeatModule } from './modules/heartbeat/heartbeat.module';
import { UserModule } from './modules/user/user.module';

export const TestTypeOrmModule = TypeOrmModule.forRootAsync({ useClass: MysqlTestConfig });

@Module({
  imports: [TypeOrmModule.forRootAsync({ useClass: MysqlConfig }), NestConfigModule, HeartbeatModule, UserModule],
  providers: [],
})
export class AppModule {}
