import { Injectable } from '@nestjs/common';
import { Card } from '@card/card.model';
import { CardRepository } from '@card/card.repository';

@Injectable()
export class CardService {
  constructor(private readonly cardRepository: CardRepository) {}

  async create(dto: any): Promise<Card> {
    const card = await this.cardRepository.findByDevNumber(dto.devNumber);
    if (!card) {
      return this.cardRepository.create(Card.create(dto));
    }
    throw new Error('Error');
  }
  async findByDevNumber(dev: string): Promise<Card> {
    const card = await this.cardRepository.findByDevNumber(dev);
    if (card) {
      return card;
    }
    throw new Error('Error');
  }
  async delete(dev: string): Promise<void> {
    const card = await this.cardRepository.findByDevNumber(dev);
    if (card) {
      return this.cardRepository.delete(dev);
    }
    throw new Error('Error');
  }

  async update(dev: string, dto: any): Promise<Card> {
    const card = await this.cardRepository.findByDevNumber(dev);
    if (card) {
      return this.cardRepository.update(dev, Card.create(dto));
    }
    throw new Error('Error');
  }
}
