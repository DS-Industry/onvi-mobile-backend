import { IsDefined, IsNumber, IsString } from 'class-validator';

export class ValidationPromoCodeDto {
  @IsString()
  @IsDefined()
  promoCode: string;
  @IsNumber()
  @IsDefined()
  carWashId: number;
}
