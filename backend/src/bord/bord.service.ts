import { Injectable } from '@nestjs/common';
import { CreateBordDto } from './dto/create-bord.dto';
import { UpdateBordDto } from './dto/update-bord.dto';

@Injectable()
export class BordService {
  create(createBordDto: CreateBordDto) {
    return 'This action adds a new bord';
  }

  findAll() {
    return `This action returns all bord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bord`;
  }

  update(id: number, updateBordDto: UpdateBordDto) {
    return `This action updates a #${id} bord`;
  }

  remove(id: number) {
    return `This action removes a #${id} bord`;
  }
}
