import { Card } from '@card/card.model';

export interface ICard {
  create(dto: any): Promise<any>;
  findByDev(dev: string): Promise<any>;
  delete(dev: string): Promise<any>;
  updateByDev(dev: string, dto: any): Promise<void>;
}
