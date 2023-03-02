import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { UserAuthentication } from '../../../../common/entities/user-authentication/user-authentication.entity';
import { PasswordService } from './authentication-type/password.service';
import { AuthenticationRepository } from './authentication.repository';
import { CreateAuthenticationDto } from './dtos/create-authentication.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly authenticationRepository: AuthenticationRepository,
    private readonly passwordService: PasswordService,
  ) {}

  async createPassword({
    user,
    code,
    manager,
  }: CreateAuthenticationDto & { manager?: EntityManager }): Promise<UserAuthentication> {
    const password = await this.passwordService.createPassword({ user, code });
    return this.authenticationRepository.addUserAuthentication(password, manager);
  }
}
