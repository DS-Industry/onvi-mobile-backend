import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from '@auth/strategies/jwt.strategy';
import { LocalStrategy } from '@auth/strategies/local.strategy';
import { RefreshTokenStrategy } from '@auth/strategies/refresh.strategy';

@Module({
  providers: [AuthService, JwtStrategy, LocalStrategy, RefreshTokenStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
