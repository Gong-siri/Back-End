import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Realty } from './realty.entity';


@Injectable()
export class RealtyService {
  constructor(@InjectRepository(Realty) private realty: Repository<Realty>) {}

  findByOwnerId(ownerId: number) {
    return this.realty.findBy({ ownerId });
  }

  // findOne(id: number) {
  //   if (!id) return null;
  //   return this.realty.findOne({
  //     where: {
  //       id,
  //     },
  //   });
  // }
}
