import {
  Controller,
  Get,
  Param,
  Delete,
  HttpCode,
  Post,
  Body,
  Patch,
} from '@nestjs/common';
import { CardService } from '@card/card.service';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}
  @Post('create')
  @HttpCode(201)
  async create(@Body() dto: any) {
    try {
      return await this.cardService.create(dto);
    } catch (err) {
      console.log(err);
    }
  }
  @Get(':dev')
  @HttpCode(200)
  findByDevNumber(@Param('dev') dev: string) {
    try {
      return this.cardService.findByDevNumber(dev);
    } catch (err) {
      console.log(err);
    }
  }

  @Delete(':dev')
  @HttpCode(201)
  async delete(@Param('dev') dev: string) {
    try {
      return await this.cardService.delete(dev);
    } catch (err) {
      console.log(err);
    }
  }

  @Patch(':dev')
  @HttpCode(201)
  async update(@Param('dev') dev: string, @Body() dto: any) {
    try {
      return await this.cardService.update(dev, dto);
    } catch (err) {
      console.log(err);
    }
  }
}
