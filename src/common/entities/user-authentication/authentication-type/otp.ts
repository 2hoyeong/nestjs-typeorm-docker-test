import { AuthenticationType } from '../user-authentication.constants';
import { UserAuthentication } from '../user-authentication.entity';

export class Otp extends UserAuthentication {
  constructor() {
    super();
    this.idx = AuthenticationType.Otp;
  }

  static create(from: Omit<Partial<Otp>, 'idx'>): UserAuthentication {
    const otp = new Otp();
    Object.assign(otp, from);
    return otp;
  }
}
