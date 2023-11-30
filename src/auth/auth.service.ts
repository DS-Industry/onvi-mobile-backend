import { Injectable } from '@nestjs/common';
import { LoginClientDto } from '@auth/dto/login-client.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async findClient() {}

  async validateClient(phone: string, otp: string) {}

  async registration() {}

  async login(data: LoginClientDto): Promise<any> {
    const accessToken = this.jwtService.sign({});
    const refreshToken = await this.getRefreshToken();

    return { accessToken, refreshToken };
  }

  private async getRefreshToken(): Promise<string> {
    //token?
    return null;
  }

  async reqOtp() {}

  async createRefreshToken() {}
}
