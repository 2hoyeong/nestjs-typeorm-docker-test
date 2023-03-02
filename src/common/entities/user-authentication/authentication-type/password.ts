import { AuthenticationType } from '../user-authentication.constants';
import { UserAuthentication } from '../user-authentication.entity';

export class Password extends UserAuthentication {
  constructor() {
    super();
    this.idx = AuthenticationType.Password;
  }

  static create(from: Omit<Partial<Password>, 'idx'>): UserAuthentication {
    const password = new Password();
    Object.assign(password, from);
    return password;
  }
}
