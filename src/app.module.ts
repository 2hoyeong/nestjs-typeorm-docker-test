import { Module } from '@nestjs/common';
import { HeartbeatModule } from './modules/heartbeat/heartbeat.module';

@Module({
  imports: [HeartbeatModule],
  providers: [],
})
export class AppModule {}
