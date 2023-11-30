import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from '@auth/strategies/jwt.strategy';
import { LocalStrategy } from '@auth/strategies/local.strategy';
import { RefreshTokenStrategy } from '@auth/strategies/refresh.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { options } from '@config/jwt-module-async-options';

@Module({
  imports: [PassportModule, JwtModule.registerAsync(options())],
  providers: [AuthService, JwtStrategy, LocalStrategy, RefreshTokenStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
