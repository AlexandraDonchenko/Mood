import { DiaryService } from './diary.service';
import { Controller, Post, Body, Get } from '@nestjs/common';

@Controller()
export class DiaryController {
  constructor(private readonly diaryService: DiaryService) {}
  @Post()
  async addEntrie(
    @Body('userId') userId: number,
    @Body('entrie') entrie: Object,
  ) {
    const result = await this.diaryService.insertEntries(userId, entrie);
    return result;
  }
}
