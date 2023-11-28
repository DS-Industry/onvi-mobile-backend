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

  @Get(':dev')
  @HttpCode(200)
  findOne(@Param('dev') dev: string) {
    return this.cardService.findByDev(dev);
  }

  @Post('create')
  @HttpCode(201)
  async create(@Body() dto: any) {
    return await this.cardService.create(dto);
  }

  @Patch(':dev')
  @HttpCode(201)
  async update(@Param('dev') dev: string, @Body() dto: any) {
    return await this.cardService.updateByDev(dev, dto);
  }

  @Delete(':dev')
  @HttpCode(201)
  async delete(@Param('dev') dev: string) {
    return await this.cardService.delete(dev);
  }
}
