import {
  IsString,
  IsBoolean,
  IsNumberString,
  Max,
  Min,
  IsOptional,
  IsNotEmpty,
  Matches,
} from 'class-validator';

export class RegisterClientDto {
  @IsString()
  @IsNotEmpty({ message: 'Phone number is required' })
  @Matches(/^\+?7(9\d{9})$/, {
    message: 'Phone number must be valid',
  })
  phone: string;

  @IsNumberString()
  @Min(4)
  @Max(4)
  otp: string;

  @IsBoolean()
  @IsOptional()
  isTermsAccepted?: boolean;

  @IsBoolean()
  @IsOptional()
  isPromoTermsAccepted?: boolean;
}