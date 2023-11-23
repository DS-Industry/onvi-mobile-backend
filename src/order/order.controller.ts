import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from '@order/dto/create-order.dto';
import { ValidationPromoCodeDto } from '@order/dto/validation-promocode.dto';
import { PingPosDto } from '@order/dto/ping-pos.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('')
  @HttpCode(201)
  async create(@Body() data: CreateOrderDto) {
    try {
      return this.orderService.createOrder();
    } catch (err) {}
  }

  @Post('promo/validate')
  @HttpCode(201)
  async validatePromo(@Body() data: ValidationPromoCodeDto) {
    try {
      return this.orderService.validPromo();
    } catch (err) {}
  }

  @Get('ping')
  @HttpCode(200)
  async pingPos(@Query() query: PingPosDto){
    try {
      return this.orderService.pingPos();
    } catch (err) {}
  }
}
