import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateRealtyDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsBoolean()
  pinned: boolean;
  // @IsNotEmpty()
  // @IsNumber()
  // monthly_rent: number;

  // @IsNotEmpty()
  // @IsNumber()
  // daily_rent: number;

  // @IsNotEmpty()
  // @IsNumber()
  // hourly_rent: number;
}
