import { IsNotEmpty, IsString, Matches, Max, Min } from 'class-validator';

export class LoginClientDto {
  @IsString()
  @IsNotEmpty({ message: 'Phone number is required' })
  @Matches(/^\+?7(9\d{9})$/, {
    message: 'Phone number must be valid',
  })
  phone: string;

  @IsString()
  @Min(4)
  @Max(4)
  otp: string;
}
