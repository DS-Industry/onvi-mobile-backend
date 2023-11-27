import { Injectable } from '@nestjs/common';
import { ClientRepository } from '@client/client.repository';
import { IClient } from '@interface/IClient';
import { Client } from '@client/client.model';

@Injectable()
export class ClientService implements IClient {
  constructor(private readonly clientRepository: ClientRepository) {}

  async create(dto: any): Promise<any> {
    return this.clientRepository.create(dto);
  }

  async deleteById(): Promise<string> {
    return '';
  }

  async findByPhone(phone: string): Promise<any> {
    return this.clientRepository.findByPhone(phone);
  }

  async updateById(): Promise<Client> {
    return undefined;
  }
}
