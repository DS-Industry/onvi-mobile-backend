import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nest-knexjs';
import { Knex } from 'knex';
import { ICardRepository } from '@interface/ICardRepository';
import { Card } from '@card/card.model';

@Injectable()
export class CardRepository implements ICardRepository {
  constructor(@InjectModel() private readonly knex: Knex) {}
  async create(card: Card): Promise<Card> {
    try {
      const cardData = await this.knex
        .insert({ card })
        .into('CRDCARD')
        .returning('*');
      return Card.toEntity(cardData[0]);
    } catch (err: any) {
      console.log(err);
    }
  }
  async findByDevNumber(dev: string): Promise<Card> {
    try {
      const cardData = await this.knex
        .table('CRDCARD')
        .where('DEV_NOMER', dev)
        .first();
      return Card.toEntity(cardData);
    } catch (err: any) {
      console.log(err);
    }
  }

  async delete(dev: string): Promise<void> {
    try {
      await this.knex('CRDCARD').where('DEV_NOMER', dev).update({ IS_DEL: 1 });
    } catch (err: any) {
      console.log(err);
    }
  }

  async update(dev: string, card: Card): Promise<Card> {
    try {
      const cardData = await this.knex('CRDCARD')
        .where('DEV_NOMER', dev)
        .update(card);
      return Card.toEntity(cardData[0]);
    } catch (err: any) {
      console.log(err);
    }
  }
}
