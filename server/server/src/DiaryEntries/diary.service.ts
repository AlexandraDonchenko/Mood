import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Diary } from './diary.model';
import deepai = require('deepai');
deepai.setApiKey('35023bd6-3725-4e07-a82a-9c467eb97289');

@Injectable()
export class DiaryService {
  private entries: Diary[] = [];
  constructor(
    @InjectModel('Diary') private readonly diaryModel: Model<Diary>,
  ) {}
  async insertEntries(userId: number, entrie: object) {
    const newEntrie = new this.diaryModel({ userId: userId, entrie: entrie });
    const result = await newEntrie.save();

    const sentiment = (async function () {
      var resp = await deepai.callStandardApi('sentiment-analysis', {
        text: await result.entrie.text,
      });
      return resp;
    })();
    return {
      text: result.entrie.text,
      sentiment: await sentiment,
    };
  }
}
