import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from '@auth/auth.service';
import { RegisterClientDto } from '@auth/dto/registrer-client.dto';
import { LoginClientDto } from '@auth/dto/login-client.dto';
import { SendOtpDto } from '@auth/dto/send-otp.dto';
import { GetRefreshDto } from '@auth/dto/get-refresh.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(201)
  async register(@Body() data: RegisterClientDto) {
    try {
      return this.authService.createClient();
    } catch (err) {}
  }

  @Post('login')
  @HttpCode(201)
  async login(@Body() data: LoginClientDto) {
    try {
      return this.authService.singIn(data);
    } catch (err) {}
  }

  @Post('otp')
  @HttpCode(201)
  async reqOtp(@Body() data: SendOtpDto) {
    try {
      return this.authService.reqOtp();
    } catch (err) {}
  }

  @Post('refresh')
  @HttpCode(201)
  async refToken(@Body() data: GetRefreshDto) {
    try {
      return this.authService.createRefresh();
    } catch (err) {}
  }
}
