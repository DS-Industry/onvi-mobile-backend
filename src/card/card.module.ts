import { Module } from '@nestjs/common';
import { CardService } from '@card/card.service';
import { CardController } from '@card/card.controller';
import { CardRepository } from '@card/card.repository';

@Module({
  controllers: [CardController],
  providers: [CardService, CardRepository],
})
export class CardModule {}
