import { IsString } from 'class-validator';

export class GetRefreshDto {
  @IsString()
  refresh: string;
}
