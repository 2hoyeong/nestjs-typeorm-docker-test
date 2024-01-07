import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Platform } from '../../entities/platform/platform.entity';

export default class PlatformSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Platform);
    await repository.insert([
      {
        name: '비트코인',
        symbol: 'BTC',
        useUtxo: true,
        useFeeAddress: false,
      },
      {
        name: '이더리움',
        symbol: 'ETH',
        useUtxo: false,
        useFeeAddress: true,
      },
    ]);
  }
}
