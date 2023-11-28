import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nest-knexjs';
import { Knex } from 'knex';

@Injectable()
export class ClientRepository {
  constructor(@InjectModel() private readonly knex: Knex) {}

  async findByPhone(phone: string): Promise<any> {
    try {
      console.log(phone);
      return await this.knex
        .table('CRDCLIENT')
        .where('CORRECT_PHONE', phone)
        .first();
    } catch (err: any) {
      console.log(err);
    }
  }

  async create(dto: any): Promise<any> {
    try {
      return await this.knex
        .insert({ dto })
        .into('CRDCLIENT')
        .then(() => {
          console.log('Data inserted successfully');
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err: any) {
      console.log(err);
    }
  }

  async updateByPhone(phone: string, dto: any) {
    try {
      return await this.knex('CRDCLIENT')
        .where('CORRECT_PHONE', phone)
        .update(dto)
        .then(() => {
          console.log('Data update successfully');
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err: any) {
      console.log(err);
    }
  }

  async delete(phone: string) {
    try {
      return await this.knex('CRDCLIENT')
        .where('CORRECT_PHONE', phone)
        .update({ TAG: 'Delete' })
        .then(() => {
          console.log('Data update successfully');
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err: any) {
      console.log(err);
    }
  }
}
