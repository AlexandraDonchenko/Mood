import Sidebar from './../sidebar/sidebar';
import './home-page.css';
import Obj from './../../apiServise';
import { Diary } from './../../types';
import UserPage from './../user-page/user-page';
import React, { useEffect, useState } from 'react';

function Homepage() {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [isLoaded, setLoaded] = useState<Boolean>(false);
  const [pickedDiary, setPickedDiary] = useState<Diary | undefined>();

  //----------------------------------------------------------------------------------------
  const createDiary = async function (name: string) {
    setLoaded(false);
    const oldDiaries = diaries;
    const data = await Obj.postEntrie({
      diaryName: name,
      user: 1,
      entries: [{}],
    });
    setDiaries([...oldDiaries, data]);
    setLoaded(true);
  };
  const addEntry = async function (diaryId: string, text: string) {
    setLoaded(false);
    let oldEntries = diaries.filter((diary) => {
      return diary._id === diaryId;
    });
    const date: Date = new Date();
    const entry: {
      date: Date;
      text: string;
    } = { date: date, text: text };
    const entries = [...oldEntries[0].entries, entry];
    Obj.addEntry({ id: diaryId, entries });
    setLoaded(true);
  };
  const getEntries = function (diaryId: string) {
    setLoaded(false);
    const diary = diaries.filter((diary) => {
      return diary._id === diaryId;
    });
    setPickedDiary(diary[0]);
    setLoaded(true);
    return diary;
  };
  //---------------------------------------------------------------------------------------
  useEffect(() => {
    Obj.getDiaries().then((diaries) => {
      setDiaries(diaries);
      setLoaded(true);
      if (isLoaded === true) console.log(diaries);
    });
  }, []);
  //------------------------------------------------------------------------------------------------
  return (
    <div className="homepage">
      {isLoaded === true
        ? [
            <div>
              <Sidebar
                createDiary={createDiary}
                getEntries={getEntries}
                diaries={diaries}
              />
              <UserPage diary={pickedDiary} addEntry={addEntry} />
            </div>,
          ]
        : null}
    </div>
  );
}
export default Homepage;
