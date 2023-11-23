import { IsBoolean, IsDefined, IsOptional, IsString } from "class-validator";

export class CreatePaymentDto {
  @IsString()
  @IsDefined()
  paymentToken: string;
  @IsString()
  @IsDefined()
  amount: string;
  @IsString()
  @IsOptional()
  currency?: string;
  @IsBoolean()
  @IsOptional()
  capture?: boolean;
  @IsString()
  @IsOptional()
  description?: string;
}
