import { DiaryService } from './diary.service';
import { Controller, Post, Body, Get, Param, Put, Patch } from '@nestjs/common';
import { Diary } from './diary.model';

@Controller()
export class DiaryController {
  constructor(private readonly diaryService: DiaryService) {}
  @Post()
  async addEntrie(
    @Body('diaryName') diaryName: string,
    @Body('user') user: number,
    @Body('entries') entries: object[],
  ) {
    const result = await this.diaryService.insertEntries(
      diaryName,
      user,
      entries,
    );
    return result;
  }
  @Get(':id')
  async getDiaries(@Param() params): Promise<Diary[]> {
    console.log(params.id);
    const result = await this.diaryService.getDiaries(Number(params.id));
    return result;
  }
  @Patch()
  async addEntry(
    @Body('id') id: string,
    @Body('entries') entries: { date: Date; text: string }[],
  ): Promise<Diary> {
    console.log('id', id);
    const result = await this.diaryService.addEntry(id, entries);
    console.log(result.entries);
    return result;
  }
}
