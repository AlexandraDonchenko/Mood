import Sidebar from './../sidebar/sidebar';
import './home-page.module.css';
import Obj from './../../apiServise';
import { Diary } from './../../types';
import UserPage from './../user-page/user-page';
import React, { useEffect, useState } from 'react';
import WelcomeUserPage from '../WelcomeUserPage/welcome-user-page';
import HeaderTwo from './../header /header-two';

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
  //---------------------------------------------------------------------------------------------------------------------
  const addEntry = async function (diaryId: string, text: string) {
    let oldEntries = diaries.filter((diary) => {
      return diary._id === diaryId;
    });
    const date: Date = new Date();
    const entry: {
      date: Date;
      text: string;
    } = { date: date, text: text };
    const entries = [...oldEntries[0].entries, entry];
    const diary = await Obj.addEntry({ id: diaryId, entries });
    setPickedDiary(diary);
  };

  const getEntries = function (diaryId: string) {
    setLoaded(false);
    const diary = diaries.find((diary) => {
      return diary._id === diaryId;
    });
    setPickedDiary(diary);
    setLoaded(true);
    return diary;
  };
  console.log(diaries, 'HOME');
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
              {' '}
              <HeaderTwo />
              <div className="home-page-2">
                <Sidebar
                  createDiary={createDiary}
                  getEntries={getEntries}
                  diaries={diaries}
                />
                {pickedDiary !== undefined ? (
                  <UserPage diary={pickedDiary} addEntry={addEntry} />
                ) : (
                  <WelcomeUserPage />
                )}
              </div>
            </div>,
          ]
        : null}
    </div>
  );
}
export default Homepage;
