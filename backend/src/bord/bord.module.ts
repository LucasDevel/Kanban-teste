import { Module } from '@nestjs/common';
import { BordService } from './bord.service';
import { BordGateway } from './bord.gateway';

@Module({
  providers: [BordGateway, BordService],
})
export class BordModule {}
