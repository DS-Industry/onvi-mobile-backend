import { IsDefined, IsString } from 'class-validator';

export class GetRefreshDto {
  @IsString()
  @IsDefined()
  refresh: string;
}
