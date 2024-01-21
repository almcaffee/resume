import { IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
export class IsBooleanDto {
  @IsOptional()
  @Transform(({ value }) => !!value && value === 'true')
  showId: boolean;
}
