import { Test, TestingModule } from '@nestjs/testing';
import { DocumentDriveService } from './document-drive.service';

describe('DocumentDriveService', () => {
  let service: DocumentDriveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentDriveService],
    }).compile();

    service = module.get<DocumentDriveService>(DocumentDriveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
