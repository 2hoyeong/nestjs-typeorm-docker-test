import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Platform {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  idx: string;

  @Column({ type: 'varchar', length: 255, nullable: false, comment: '플랫폼 이름' })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false, comment: '플랫폼 심볼' })
  symbol: string;

  @Column({ type: 'boolean', nullable: false, comment: 'Utxo 사용 여부' })
  useUtxo: boolean;

  @Column({ type: 'boolean', nullable: false, comment: '수수료 주소 사용 여부' })
  useFeeAddress: boolean;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
