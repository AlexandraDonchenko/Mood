import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DiaryModule } from './DiaryEntries/diary.module';

@Module({
  imports: [
    DiaryModule,
    MongooseModule.forRoot('mongodb://localhost:27017/newDiary'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
