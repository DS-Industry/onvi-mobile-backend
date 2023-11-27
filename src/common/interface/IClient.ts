import { Client } from '@client/client.model';

export interface IClient {
  create(dto: any): Promise<any>;
  findByPhone(phone: string): Promise<any>;
  deleteById(): Promise<string>;
  updateById(): Promise<Client>;
}
