import * as mongoose from 'mongoose';
export const DiarySchema = new mongoose.Schema({
  diaryName: { type: String, lowercase: true, trim: true },
  user: Number,
  entries: [
    {
      date: Date,
      text: { type: String, lowercase: true, trim: true },
    },
  ],
});
export interface Diary extends mongoose.Document {
  diaryName: string;
  user: number;
  entries: [
    {
      date: Date;
      text: string;
    },
  ];
}