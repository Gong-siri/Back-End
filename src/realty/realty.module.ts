import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RealtyController } from './realty.controller';
import { Realty } from './realty.entity';
import { RealtyService } from './realty.service';

@Module({
  imports: [TypeOrmModule.forFeature([Realty])],
  controllers: [RealtyController],
  providers: [RealtyService],
})
export class RealtyModule {}
