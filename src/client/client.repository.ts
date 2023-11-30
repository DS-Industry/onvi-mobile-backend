import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nest-knexjs';
import { Knex } from 'knex';
import { IClientRepository } from '@interface/IClientRepository';
import { Client } from '@client/client.model';

@Injectable()
export class ClientRepository implements IClientRepository {
  constructor(@InjectModel() private readonly knex: Knex) {}
  async create(client: Client): Promise<Client> {
    try {
      const clientData = await this.knex
        .insert({ client })
        .into('CRDCLIENT')
        .returning('*');
      return Client.toEntity(clientData[0]);
    } catch (err: any) {
      console.log(err);
    }
  }
  async findByPhone(phone: string): Promise<Client> {
    try {
      const clientData = await this.knex
        .table('CRDCLIENT')
        .where('CORRECT_PHONE', phone)
        .first();
      return Client.toEntity(clientData);
    } catch (err: any) {
      console.log(err);
    }
  }

  async delete(phone: string): Promise<void> {
    try {
      await this.knex('CRDCLIENT')
        .where('CORRECT_PHONE', phone)
        .update({ TAG: 'Delete' });
    } catch (err: any) {
      console.log(err);
    }
  }

  async update(phone: string, updateClient: Client): Promise<Client> {
    try {
      const clientData = await this.knex('CRDCLIENT')
        .where('CORRECT_PHONE', phone)
        .update(updateClient)
        .returning('*');
      return Client.toEntity(clientData[0]);
    } catch (err: any) {
      console.log(err);
    }
  }
}
