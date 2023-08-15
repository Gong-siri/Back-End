import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Realty } from './realty.entity';
import { UpdateRealtyDto } from './dto/update-realty.dto';

@Injectable()
export class RealtyService {
  constructor(@InjectRepository(Realty) private realty: Repository<Realty>) {}

  findByOwnerId(ownerId: number) {
    return this.realty.findBy({ ownerId });
  }

  async update(id: number, realtyDto: UpdateRealtyDto) {
    const realty = await this.realty.findOne({
      where: {
        id,
      },
    });

    if (!realty) {
      throw new NotFoundException(`todo id: ${id} not found`);
    }

    return this.realty.save({ ...realty, ...realtyDto });
  }

  findOne(id: number) {
    if (!id) return null;
    return this.realty.findOne({
      where: {
        id,
      },
    });
  }
}
