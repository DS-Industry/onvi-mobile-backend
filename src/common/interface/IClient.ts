import { Client } from '@client/client.model';

export interface IClient {
  create(): Promise<Client>;
  findByPhone(phone: string): Promise<any>;
  deleteById(): Promise<string>;
  updateById(): Promise<Client>;
}
