import {
  Controller,
  Get,
  Param,
  Delete,
  HttpCode,
  Post,
  Body,
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardService.deleteById(+id);
  }
}
