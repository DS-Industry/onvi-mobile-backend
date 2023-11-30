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
  @Post('create')
  @HttpCode(201)
  async create(@Body() dto: any) {
    try {
      return await this.clientService.create(dto);
    } catch (err) {
      console.log(err);
    }
  }
  @Get(':phone')
  @HttpCode(200)
  async findByPhone(@Param('phone') phone: string): Promise<any> {
    try {
      return await this.clientService.findByPhone(phone);
    } catch (err) {
      console.log(err);
    }
  }
  @Delete(':phone')
  @HttpCode(201)
  async delete(@Param('phone') phone: string): Promise<any> {
    try {
      return await this.clientService.delete(phone);
    } catch (err) {
      console.log(err);
    }
  }
  @Patch(':phone')
  @HttpCode(201)
  async update(@Param('phone') phone: string, @Body() dto: any) {
    try {
      return await this.clientService.update(phone, dto);
    } catch (err) {
      console.log(err);
    }
  }
}
