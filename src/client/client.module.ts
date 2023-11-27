import { Module } from '@nestjs/common';
import { ClientService } from '@client/client.service';
import { ClientController } from '@client/client.controller';
import { ClientRepository } from '@client/client.repository';

@Module({
  controllers: [ClientController],
  providers: [ClientService, ClientRepository],
})
export class ClientModule {}
