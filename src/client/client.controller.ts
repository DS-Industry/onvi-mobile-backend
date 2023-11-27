import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ClientService } from '@client/client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
  @Get(':phone')
  @HttpCode(200)
  async findByPhone(@Param('phone') phone: string): Promise<any> {
    return await this.clientService.findByPhone(phone);
  }

  @Post('create')
  @HttpCode(201)
  async create(@Body() dto: any) {
    return await this.clientService.create(dto);
  }
}
