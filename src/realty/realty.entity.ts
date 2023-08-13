import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Realty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ownerId: number;

  @Column()
  name: string;

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
