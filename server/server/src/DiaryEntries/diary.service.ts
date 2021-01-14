import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Diary } from './diary.model';

@Injectable()
export class DiaryService {
  private entries: Diary[] = [];
  constructor(
    @InjectModel('Diary') private readonly diaryModel: Model<Diary>,
  ) {}
  async insertEntries(userId: number, entrie: object) {
    const newEntrie = new this.diaryModel({ userId: userId, entrie: entrie });
    const result = await newEntrie.save();
    return result.entrie.text;
  }
}
