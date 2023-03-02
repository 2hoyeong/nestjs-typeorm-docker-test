import { User } from '../../../../../common/entities/user/user.entity';

export class CreateAuthenticationDto {
  user: User;
  code: string;
}
