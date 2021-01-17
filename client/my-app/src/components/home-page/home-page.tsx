import Sidebar from './../sidebar/sidebar';
import './home-page.css';
import Obj from './../../apiServise';
import { Diary } from './../../types';
import UserPage from './../user-page/user-page';
import React, { useEffect, useState } from 'react';

function Homepage() {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [isLoaded, setLoaded] = useState<Boolean>(false);
  const [arrayOfEntries, setArrayOfEntries] = useState<object[]>([]);

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
  const getEntries = function (diaryId: string) {
    setLoaded(false);
    const entries = diaries.filter((diary) => {
      console.log(diaryId);
      return diary._id === diaryId ? diary.entries : null;
    });
    setArrayOfEntries(entries);
    setLoaded(true);
    return entries;
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
              <UserPage entries={arrayOfEntries} />
            </div>,
          ]
        : null}
    </div>
  );
}
export default Homepage;
