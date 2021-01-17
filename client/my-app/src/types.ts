// import { createContext, useContext } from 'react';
// import Obj from './apiServise'
// export type DiaryContextState = {
//   diary: Diary;
//   createDiary: ;
// };
export interface Diary {
  _id?: string;
  diaryName: string;
  entries:
    | [
        {
          date: Date;
          text: string;
          sentiment?: string[];
        }
      ]
    | [];
}
