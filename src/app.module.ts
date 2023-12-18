import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArsalanService } from './arsalan/arsalan.service';
import { ArsalanController } from './arsalan/arsalan.controller';
import { ArsalanModule } from './arsalan/arsalan.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [ArsalanModule, BookModule],
  controllers: [AppController, ArsalanController],
  providers: [AppService, ArsalanService],
})
export class AppModule {}
