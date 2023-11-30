import { Client } from '@client/client.model';

export interface IClientRepository {
  create(client: Client): Promise<Client>;
  findByPhone(phone: string): Promise<Client>;
  delete(phone: string): Promise<void>;
  update(phone: string, updateClient: Client): Promise<Client>;
}
