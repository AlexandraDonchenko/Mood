import { DiaryService } from './diary.service';
import { Controller, Post, Body, Get, Param } from '@nestjs/common';

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
  async getDiaries(@Param() params): Promise<any> {
    console.log(params.id);
    const result = await this.diaryService.getDiaries(Number(params.id));
    return result;
  }
  @Get('')
  async getEntries(@Body('diaryName') diaryName: string) {
    const result = await this.diaryService.getEntries(diaryName);
    return result;
  }
}
