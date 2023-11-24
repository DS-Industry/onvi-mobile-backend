import { Injectable } from '@nestjs/common';
import { IPayment } from '@interface/IPayment';
import { Payment } from '@payment/payment.model';

@Injectable()
export class PaymentService implements IPayment {
  async create(): Promise<Payment> {
    return undefined;
  }

  async deleteById(): Promise<string> {
    return '';
  }

  async findById(): Promise<Payment> {
    return undefined;
  }

  async updateById(): Promise<Payment> {
    return undefined;
  }
}
