import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiaryController } from './diary.controller';
import { DiarySchema } from './diary.model';
import { DiaryService } from './diary.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Diary', schema: DiarySchema }]),
  ],
  controllers: [DiaryController],
  providers: [DiaryService],
})
export class DiaryModule {}
