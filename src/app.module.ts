import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentDriveService } from './document-drive/document-drive.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DocumentDriveService],
})
export class AppModule {}
