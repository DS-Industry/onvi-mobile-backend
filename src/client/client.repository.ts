import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nest-knexjs';
import { Knex } from 'knex';
import { Client } from '@client/client.model';
@Injectable()
export class ClientRepository {
  constructor(@InjectModel() private readonly knex: Knex) {}

  async findByPhone(phone: string): Promise<any> {
    try {
      console.log(phone);
      const client = await this.knex
        .table('CRDCLIENT')
        .where('CORRECT_PHONE', phone)
        .first();
      return client;
    } catch (err: any) {
      console.log(err);
    }
  }
}
