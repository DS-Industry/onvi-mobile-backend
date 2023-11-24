import { Card } from '@card/card.model';

export interface ICard {
  create(): Promise<Card>;
  findByPhone(phone: string): Promise<any>;
  deleteById(id: number): Promise<string>;
  updateById(): Promise<Card>;
}
