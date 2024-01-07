import { EntityManager, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Platform } from '../../common/entities/platform/platform.entity';

@Injectable()
export class PlatformRepository {
  constructor(@InjectRepository(Platform) private readonly repository: Repository<Platform>) {}

  async getPlatforms(manager: EntityManager = this.repository.manager): Promise<Platform[]> {
    return manager.find(Platform);
  }
}
