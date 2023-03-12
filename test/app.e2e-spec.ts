import { Test, TestingModule } from '@nestjs/testing';
import { ClassSerializerInterceptor, INestApplication, Module, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { Reflector } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlTestConfig } from '../src/common/config/mysql.config';
import { NestConfigModule } from '../src/common/config/config.module';
import { HeartbeatModule } from '../src/modules/heartbeat/heartbeat.module';
import { UserModule } from '../src/modules/user/user.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({ useClass: MysqlTestConfig })],
})
class TestOrmModule {}

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TestOrmModule, NestConfigModule, HeartbeatModule, UserModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
    await app.init();
  });

  it('/heartbeat (GET)', () => {
    return request(app.getHttpServer()).get('/heartbeat').expect(200).expect({ status: 'ok' });
  });

  describe('/users', () => {
    it('/signup (POST)', () => {
      const user = { email: 'test_email@gmail.com', password: '123456', name: '이호영' };
      return request(app.getHttpServer()).post('/users/signup').send(user).expect(201).expect({ email: user.email });
    });
  });
});
