import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { DiaryModule } from './DiaryEntries/diary.module';

require('dotenv').config();
const dbUri = process.env.DB_URI;

@Module({
  imports: [
    DiaryModule,
    MongooseModule.forRoot(dbUri),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
