import { Module } from '@nestjs/common';
import { NestConfigModule } from './common/config/config.module';
import { HeartbeatModule } from './modules/heartbeat/heartbeat.module';

@Module({
  imports: [NestConfigModule, HeartbeatModule],
  providers: [],
})
export class AppModule {}
