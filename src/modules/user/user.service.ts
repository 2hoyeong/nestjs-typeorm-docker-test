import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource, QueryRunner } from 'typeorm';
import { User } from '../../common/entities/user/user.entity';
import { CreateUserBodyDto } from './dtos/create-user.dto';
import { AuthenticationService } from './modules/authentication/authentication.service';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly userRepository: UserRepository,
    private readonly authenticationService: AuthenticationService,
  ) {}

  async createUser({ email, name, password }: CreateUserBodyDto) {
    const connection = this.dataSource;
    const queryRunner: QueryRunner = connection.createQueryRunner();
    const manager = queryRunner.manager;
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const user = User.from({ email, name });

      const userExists = await this.userRepository.findByEmail(email, manager);
      if (userExists) {
        throw new BadRequestException('User already exists');
      }

      const userEntity = await this.userRepository.addUser(user, manager);
      await this.authenticationService.createPassword({ user: userEntity, code: password, manager });
      await queryRunner.commitTransaction();
      return userEntity;
    } catch (e) {
      if (queryRunner.isTransactionActive && !queryRunner.isReleased) {
        await queryRunner.rollbackTransaction();
      }
      throw e;
    } finally {
      if (!queryRunner.isReleased) {
        await queryRunner.release();
      }
    }
  }
}
