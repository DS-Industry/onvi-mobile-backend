import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nest-knexjs';
import { Knex } from 'knex';
@Injectable()
export class ClientRepository {
  constructor(@InjectModel() private readonly knex: Knex) {}

  async findOne(phone: string): Promise<any> {
    try {
      console.log(phone);
      const client = await this.knex
        .table('CRDCLIENT')
        .where('CORRECT_PHONE', '+79191854846')
        .first();
      return { client };
    } catch (err: any) {
      console.log(err);
    }
  }
}
