import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService<any, true>);

  app.setGlobalPrefix(configService.get('app.prefix'));

  await app.listen(3000);
}
bootstrap();
