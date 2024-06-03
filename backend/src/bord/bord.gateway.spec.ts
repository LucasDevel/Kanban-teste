import { Test, TestingModule } from '@nestjs/testing';
import { BordGateway } from './bord.gateway';
import { BordService } from './bord.service';

describe('BordGateway', () => {
  let gateway: BordGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BordGateway, BordService],
    }).compile();

    gateway = module.get<BordGateway>(BordGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
