import { Card } from '@card/card.model';

export interface ICardRepository {
  create(card: Card): Promise<Card>;
  findByDevNumber(dev: string): Promise<Card>;
  delete(dev: string): Promise<void>;
  update(dev: string, updateCard: Card): Promise<Card>;
}
