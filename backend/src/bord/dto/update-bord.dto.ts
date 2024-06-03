import { PartialType } from '@nestjs/mapped-types';
import { CreateBordDto } from './create-bord.dto';

export class UpdateBordDto extends PartialType(CreateBordDto) {
  id: number;
}
