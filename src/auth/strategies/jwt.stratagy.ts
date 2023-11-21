import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStratagy extends PassportStrategy(Strategy) {
  constructor() {
    super();
  }
}
