import { Module } from '@nestjs/common';
import { NestConfigModule } from './common/config/config.module';
import { OrmModule } from './libs/typeorm/orm.module';
import { HeartbeatModule } from './modules/heartbeat/heartbeat.module';
import { UserModule } from './modules/user/user.module';
import { PlatformModule } from './modules/platform/platform.module';

@Module({
  imports: [OrmModule, NestConfigModule, HeartbeatModule, UserModule, PlatformModule],
  providers: [],
})
export class AppModule {}
