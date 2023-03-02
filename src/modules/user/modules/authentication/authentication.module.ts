import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAuthentication } from '../../../../common/entities/user-authentication/user-authentication.entity';
import { PasswordService } from './authentication-type/password.service';
import { AuthenticationRepository } from './authentication.repository';
import { AuthenticationService } from './authentication.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserAuthentication])],
  providers: [AuthenticationService, AuthenticationRepository, PasswordService],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
