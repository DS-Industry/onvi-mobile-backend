import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from '@payment/dto/create-payment.dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('')
  @HttpCode(201)
  async create(@Body() data: CreatePaymentDto) {
    try {
      return this.paymentService.createPayment();
    } catch (err) {}
  }
}
