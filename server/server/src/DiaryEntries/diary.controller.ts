import { DiaryService } from './diary.service';
import { Controller, Post, Body, Get } from '@nestjs/common';

@Controller()
export class DiaryController {
  constructor(private readonly diaryService: DiaryService) {}
  @Post()
  async addEntrie(
    @Body('diaryName') diaryName: string,
    @Body('entries') entries: object[],
  ) {
    console.log(entries, 'I am inside ');
    const result = await this.diaryService.insertEntries(diaryName, entries);
    return result;
  }
}
