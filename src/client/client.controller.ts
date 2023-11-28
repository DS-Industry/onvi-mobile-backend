import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientService } from '@client/client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
  @Get(':phone')
  @HttpCode(200)
  async findByPhone(@Param('phone') phone: string): Promise<any> {
    return await this.clientService.findByPhone(phone);
  }

  @Patch(':phone')
  @HttpCode(201)
  async update(@Param('phone') phone: string, @Body() dto: any) {
    return await this.clientService.updateByPhone(phone, dto);
  }

  @Post('create')
  @HttpCode(201)
  async create(@Body() dto: any) {
    return await this.clientService.create(dto);
  }

  @Delete(':phone')
  @HttpCode(201)
  async delete(@Param('phone') phone: string): Promise<any> {
    return await this.clientService.delete(phone);
  }
}
