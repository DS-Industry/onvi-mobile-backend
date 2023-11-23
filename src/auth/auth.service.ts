import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}

  async findClient() {}

  async validateClient(phone: string, otp: string) {}

  async createClient() {}

  async singIn() {}

  async reqOtp() {}

  async createRefresh() {}
}
