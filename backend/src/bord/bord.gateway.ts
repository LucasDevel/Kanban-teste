import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { BordService } from './bord.service';
import { CreateBordDto } from './dto/create-bord.dto';
import { UpdateBordDto } from './dto/update-bord.dto';

@WebSocketGateway()
export class BordGateway {
  constructor(private readonly bordService: BordService) {}

  @SubscribeMessage('createBord')
  create(@MessageBody() createBordDto: CreateBordDto) {
    return this.bordService.create(createBordDto);
  }

  @SubscribeMessage('findAllBord')
  findAll() {
    return this.bordService.findAll();
  }

  @SubscribeMessage('findOneBord')
  findOne(@MessageBody() id: number) {
    return this.bordService.findOne(id);
  }

  @SubscribeMessage('updateBord')
  update(@MessageBody() updateBordDto: UpdateBordDto) {
    return this.bordService.update(updateBordDto.id, updateBordDto);
  }

  @SubscribeMessage('removeBord')
  remove(@MessageBody() id: number) {
    return this.bordService.remove(id);
  }
}
