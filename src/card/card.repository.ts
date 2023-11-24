import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nest-knexjs';
import { Knex } from 'knex';

@Injectable()
export class CardRepository {
  constructor(@InjectModel() private readonly knex: Knex) {}
}
