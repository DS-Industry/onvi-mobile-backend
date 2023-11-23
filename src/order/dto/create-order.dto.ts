import { Optional } from '@nestjs/common';
import { IsDefined, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @Optional()
  @IsString()
  transactionId?: string;
  @IsNumber()
  @IsDefined()
  sum: number;
  @IsNumber()
  @IsDefined()
  rewardPointsUsed: number;
  @Optional()
  promoCodeId?: number;
  @IsNumber()
  @IsDefined()
  carWashId: number;
  @IsNumber()
  @IsDefined()
  bayNumber: number;
}
