import { IsDefined, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class PingPosDto {
  @IsNumber()
  @IsDefined()
  @Transform(({ value }) => parseInt(value))
  carWashId: number;
  @IsNumber()
  @IsDefined()
  @Transform(({ value }) => parseInt(value))
  bayNumber: number;
}
