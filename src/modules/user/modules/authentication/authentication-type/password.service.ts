import { Injectable } from '@nestjs/common';
import { Password } from '../../../../../common/entities/user-authentication/authentication-type/password';
import { UserAuthentication } from '../../../../../common/entities/user-authentication/user-authentication.entity';
import { generateRandomString } from '../../../../../common/utils/random.util';
import { pbkdf2 } from 'crypto';

@Injectable()
export class PasswordService {
  private async encryptPassword(password: string, salt: string): Promise<string> {
    return new Promise((resolve, reject) =>
      // TODO - salt iteration count should be configurable
      pbkdf2(password, salt, 100000, 64, 'sha512', (err, derivedKey) => {
        if (err) {
          return reject(err);
        }
        return resolve(derivedKey.toString('hex'));
      }),
    );
  }

  async createPassword({ user, code: password }): Promise<UserAuthentication> {
    const salt = generateRandomString();
    const secret = await this.encryptPassword(password, salt);
    return Password.create({ user, secret, salt });
  }
}
