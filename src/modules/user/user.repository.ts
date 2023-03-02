import { EntityManager, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../common/entities/user/user.entity';

@Injectable()
export class UserRepository {
  constructor(@InjectRepository(User) private readonly repository: Repository<User>) {}

  async addUser(user: User, manager: EntityManager = this.repository.manager): Promise<User> {
    return manager.save(User, user);
  }

  async findByEmail(email: string, manager: EntityManager = this.repository.manager): Promise<User | null> {
    return manager.findOne(User, { where: { email } });
  }
}
