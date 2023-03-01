import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestConfigModule } from './common/config/config.module';
import { MysqlConfig } from './common/config/mysql.config';
import { HeartbeatModule } from './modules/heartbeat/heartbeat.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({ useClass: MysqlConfig }), NestConfigModule, HeartbeatModule],
  providers: [],
})
export class AppModule {}
