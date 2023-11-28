import { Client } from '@client/client.model';

export interface IClient {
  create(dto: any): Promise<any>;
  findByPhone(phone: string): Promise<any>;
  delete(phone: string): Promise<any>;
  updateByPhone(phone: string, dto: any): Promise<any>;
}
