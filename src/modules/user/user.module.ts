import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../common/entities/user/user.entity';
import { AuthenticationModule } from './modules/authentication/authentication.module';

const typeormModule = TypeOrmModule.forFeature([User]);

@Module({
  imports: [typeormModule, AuthenticationModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [typeormModule, UserService],
})
export class UserModule {}
