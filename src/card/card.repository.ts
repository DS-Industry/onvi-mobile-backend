import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nest-knexjs';
import { Knex } from 'knex';

@Injectable()
export class CardRepository {
  constructor(@InjectModel() private readonly knex: Knex) {}

  async findByDev(dev: string): Promise<any> {
    try {
      console.log(dev);
      return await this.knex.table('CRDCARD').where('DEV_NOMER', dev).first();
    } catch (err: any) {
      console.log(err);
    }
  }

  async create(dto: any): Promise<any> {
    try {
      return await this.knex
        .insert({ dto })
        .into('CRDCARD')
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

  async updateByDev(dev: string, dto: any) {
    try {
      return await this.knex('CRDCARD')
        .where('DEV_NOMER', dev)
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

  async delete(dev: string) {
    try {
      return await this.knex('CRDCARD')
        .where('DEV_NOMER', dev)
        .update({ IS_DEL: 1 })
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
