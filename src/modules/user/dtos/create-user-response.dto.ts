import { Exclude, Expose } from 'class-transformer';
import { User } from '../../../common/entities/user/user.entity';

export class CreateUserResponseDto {
  @Exclude() private readonly _email: string;

  constructor({ email }: User) {
    this._email = email;
  }

  @Expose()
  get email(): string {
    return this._email;
  }
}
