import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateRealtyDto {
  @IsNotEmpty()
  @IsNumber()
  monthly_rent: number;

  @IsNotEmpty()
  @IsNumber()
  daily_rent: number;
}
