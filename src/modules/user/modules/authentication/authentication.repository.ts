import { EntityManager, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAuthentication } from '../../../../common/entities/user-authentication/user-authentication.entity';

@Injectable()
export class AuthenticationRepository {
  constructor(@InjectRepository(UserAuthentication) private readonly repository: Repository<UserAuthentication>) {}

  async addUserAuthentication(
    userAuthentication: UserAuthentication,
    manager: EntityManager = this.repository.manager,
  ): Promise<UserAuthentication> {
    return manager.save(UserAuthentication, userAuthentication);
  }
}
