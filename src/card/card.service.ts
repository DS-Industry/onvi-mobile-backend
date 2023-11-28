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

  async delete(dev: string): Promise<any> {
    return this.cardRepository.delete(dev);
  }

  async findByDev(dev: string): Promise<any> {
    return this.cardRepository.findByDev(dev);
  }

  async updateByDev(dev: string, dto: any): Promise<void> {
    return this.cardRepository.updateByDev(dev, dto);
  }
}
