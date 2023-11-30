import { Injectable } from '@nestjs/common';
import { ClientRepository } from '@client/client.repository';
import { Client } from '@client/client.model';

@Injectable()
export class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

  async create(dto: any): Promise<Client> {
    const client = await this.clientRepository.findByPhone(dto.phone);
    if (!client) {
      return this.clientRepository.create(Client.create(dto));
    }
    throw new Error('Error');
  }

  async findByPhone(phone: string): Promise<Client> {
    const client = await this.clientRepository.findByPhone(phone);
    if (client) {
      return client;
    }
    throw new Error('Error');
  }
  async delete(phone: string): Promise<void> {
    const client = await this.clientRepository.findByPhone(phone);
    if (client) {
      return this.clientRepository.delete(phone);
    }
    throw new Error('Error');
  }
  async update(phone: string, dto: any): Promise<Client> {
    const client = await this.clientRepository.findByPhone(phone);
    if (client) {
      return this.clientRepository.update(phone, Client.create(dto));
    }
    throw new Error('Error');
  }
}
