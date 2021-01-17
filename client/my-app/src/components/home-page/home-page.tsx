import Sidebar from './../sidebar/sidebar';
import WelcomeUserPage from './../WelcomeUserPage/welcome-user-page';
import './home-page.css';
import Obj from './../../apiServise';
import { Diary } from './../../types';
import { useEffect, useState } from 'react';

const getEntries = async function (diaryName: string) {
  const arrayOfEntries = await Obj.getEntries(diaryName);
};
function Homepage() {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [isLoaded, setLoaded] = useState<Boolean>(false);
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
  useEffect(() => {
    Obj.getDiaries().then((diaries) => {
      setDiaries(diaries);
      setLoaded(true);
      if (isLoaded === true) console.log(diaries);
    });
  }, []);
  return (
    <div className="homepage">
      {isLoaded === true
        ? [
            <div>
              <Sidebar createDiary={createDiary} diaries={diaries} />
              <WelcomeUserPage />
            </div>,
          ]
        : null}
    </div>
  );
}
export default Homepage;
