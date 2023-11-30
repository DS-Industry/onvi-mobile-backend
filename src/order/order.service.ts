import { Injectable } from '@nestjs/common';
import { IOrder } from '@interface/IOrder';
import { Order } from '@order/order.model';

@Injectable()
export class OrderService implements IOrder {
  async create(): Promise<Order> {
    return undefined;
  }

  async validPromo() {}

  async pingPos() {}

  async deleteById(): Promise<string> {
    return '';
  }

  async findById(): Promise<Order> {
    return undefined;
  }

  async updateById(): Promise<Order> {
    return undefined;
  }
}
