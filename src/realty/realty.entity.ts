import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Realty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ownerId: number;

  @Column()
  name: string;

  @Column()
  monthly_rent: number;

  @Column()
  daily_rent: number;

  @Column()
  hourly_rent: number;
  // @Column()
  // sido_name: string;

  // @Column()
  // sigungu_name: string;

  // @Column()
  // emd_name: string;

  // @Column()
  // property_name: string;

  // @Column()
  // ho_name: string;
}
