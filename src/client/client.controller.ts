import { Controller, Get, Param } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
  @Get(':phone')
  async findByPhone(@Param('phone') phone: string): Promise<any> {
    return await this.clientService.findByPhone(phone);
  }
}
