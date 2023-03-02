import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { AuthenticationType } from './user-authentication.constants';

@Entity()
export class UserAuthentication {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  idx: AuthenticationType;

  @Column({ type: 'varchar', length: 512, nullable: false, select: false })
  secret: string;

  @Column({ type: 'varchar', length: 512, nullable: false })
  salt: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @ManyToOne(() => User, (user) => user.userAuthentications)
  user?: User;

  static create({}: Partial<UserAuthentication>): UserAuthentication {
    const userAuthentication = new UserAuthentication();
    return userAuthentication;
  }
}
