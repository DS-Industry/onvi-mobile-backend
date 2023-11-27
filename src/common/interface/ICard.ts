import { Card } from '@card/card.model';

export interface ICard {
  create(dto: any): Promise<any>;
  findByDev(dev: string): Promise<any>;
  deleteById(id: number): Promise<string>;
  updateById(): Promise<Card>;
}
