import { DiaryService } from './diary.service';
import { Controller, Post, Body, Get, Param, Put, Patch } from '@nestjs/common';
import { Diary } from './diary.model';
import deepai = require('deepai');
deepai.setApiKey('35023bd6-3725-4e07-a82a-9c467eb97289');

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
    const result = await this.diaryService.getDiaries(Number(params.id));
    return result;
  }
  @Patch()
  async addEntry(
    @Body('id') id: string,
    @Body('entries')
    entries: { date: Date; text: string; sentiment?: [] }[],
  ): Promise<Diary> {
    const lastEntry: {
      date: Date;
      text: string;
      sentiment?: [];
    } = entries.pop();

    async function getSentiment(): Promise<[]> {
      var resp = await deepai.callStandardApi('sentiment-analysis', {
        text: lastEntry.text,
      });
      return resp.output;
    }
    const sentiment = await getSentiment();
    lastEntry.sentiment = sentiment;
    entries.push(lastEntry);
    console.log('I am in');
    console.log(entries);
    const result = await this.diaryService.addEntry(id, entries);
    return result;
  }
}
