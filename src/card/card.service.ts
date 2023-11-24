import { Injectable } from '@nestjs/common';
import { ICard } from '@interface/ICard';
import { Card } from '@card/card.model';

@Injectable()
export class CardService implements ICard {
  findAll() {
    return `This action returns all card`;
  }

  async create(): Promise<Card> {
    return undefined;
  }

  async deleteById(id: number): Promise<string> {
    return '';
  }

  async findByPhone(id: string): Promise<any> {
    return undefined;
  }

  async updateById(): Promise<Card> {
    return undefined;
  }
}
