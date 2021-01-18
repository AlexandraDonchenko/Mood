// import { createContext, useContext } from 'react';
// import Obj from './apiServise'
// export type DiaryContextState = {
//   diary: Diary;
//   createDiary: ;
// };
export interface Diary {
  _id?: string;
  diaryName: string;
  entries: [Entry] | [];
}
export interface Entry {
  _id?: string;
  date: Date;
  text: string;
  sentiment?: string[];
}
