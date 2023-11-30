import {
  IsDefined,
  IsNotEmpty,
  IsString,
  Matches,
  Max,
  Min,
} from 'class-validator';

export class LoginClientDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty({ message: 'Phone number is required' })
  @Matches(/^\+?7(9\d{9})$/, {
    message: 'Phone number must be valid',
  })
  phone: string;

  @IsString()
  @IsDefined()
  @Min(4)
  @Max(4)
  otp: string;
}
