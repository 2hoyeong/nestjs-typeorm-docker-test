import { Controller, Get } from '@nestjs/common';

@Controller('heartbeat')
export class HeartbeatController {
  @Get()
  ok() {
    return { status: 'ok' };
  }
}
