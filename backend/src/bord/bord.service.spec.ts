import { Test, TestingModule } from '@nestjs/testing';
import { BordService } from './bord.service';

describe('BordService', () => {
  let service: BordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BordService],
    }).compile();

    service = module.get<BordService>(BordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
