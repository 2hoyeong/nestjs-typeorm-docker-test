import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserAuthentication } from '../user-authentication/user-authentication.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  idx: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @OneToMany(() => UserAuthentication, (userAuthentication) => userAuthentication.user)
  userAuthentications?: UserAuthentication[];
}
