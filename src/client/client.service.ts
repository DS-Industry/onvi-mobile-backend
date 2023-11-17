import { Injectable } from '@nestjs/common';
import { ClientRepository } from '@client/client.repository';

@Injectable()
export class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}
  async findOne(phone: string): Promise<any> {
    return await this.clientRepository.findOne(phone);
  }
}
