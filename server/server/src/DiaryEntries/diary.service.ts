import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Diary, DiarySchema } from './diary.model';
import deepai = require('deepai');
import * as mongoose from 'mongoose';
deepai.setApiKey('35023bd6-3725-4e07-a82a-9c467eb97289');

@Injectable()
export class DiaryService {
  entries: Diary[] = [];
  constructor(
    @InjectModel('Diary') private readonly diaryModel: Model<Diary>,
  ) {}
  async insertEntries(diaryName: string, user: number, entries: object[]) {
    const newEntrie = new this.diaryModel({
      diaryName: diaryName,
      user: user,
      entries: entries,
    });

    const result = await newEntrie.save();

    // const sentiment = (async function () {
    //   var resp = await deepai.callStandardApi('sentiment-analysis', {
    //     text: await result.entrie.text,
    //   });
    //   return resp;
    // })();
    return result;
    //sentiment: await sentiment,
  }

  async getDiaries(id: number) {
    const result = await this.diaryModel.find({ user: id });
    return result;
  }
  async addEntry(id: string, entries: { date: Date; text: string }[]) {
    const updatedEntries = await this.diaryModel.findByIdAndUpdate(
      { _id: id },
      { entries: entries },
      { new: true },
    );
    //const newEntries = [...oldEntries.entries, { date: date, text: text }];
    console.log(updatedEntries);
    return updatedEntries;
  }
}
