import * as mongoose from 'mongoose';
export const DiarySchema = new mongoose.Schema({
  userId: Number,
  entrie: {
    date: Date,
    text: { type: String, lowercase: true, trim: true },
  },
});
export interface Diary extends mongoose.Document {
  userId: number;
  entrie: {
    date: Date;
    text: string;
  };
}
