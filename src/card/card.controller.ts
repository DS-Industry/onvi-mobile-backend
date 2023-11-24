import { Controller, Get, Param, Delete } from '@nestjs/common';
import { CardService } from './card.service';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  findAll() {
    return this.cardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardService.findByPhone(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardService.deleteById(+id);
  }
}
