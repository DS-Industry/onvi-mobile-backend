import { Payment } from '@payment/payment.model';

export interface IPayment {
  create(): Promise<Payment>;
  findById(): Promise<Payment>;
  deleteById(): Promise<string>;
  updateById(): Promise<Payment>;
}
