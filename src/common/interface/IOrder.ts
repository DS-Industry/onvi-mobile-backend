import { Order } from '@order/order.model';

export interface IOrder {
  create(): Promise<Order>;
  findById(): Promise<Order>;
  deleteById(): Promise<string>;
  updateById(): Promise<Order>;
}
