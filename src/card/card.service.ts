import { Injectable } from '@nestjs/common';
import { ICard } from '@interface/ICard';
import { Card } from '@card/card.model';
import { CardRepository } from '@card/card.repository';

@Injectable()
export class CardService implements ICard {
  constructor(private readonly cardRepository: CardRepository) {}

  async create(dto: any): Promise<any> {
    return this.cardRepository.create(dto);
  }

  async deleteById(id: number): Promise<string> {
    return '';
  }

  async findByDev(dev: string): Promise<any> {
    return this.cardRepository.findByDev(dev);
  }

  async updateById(): Promise<Card> {
    return undefined;
  }
}
