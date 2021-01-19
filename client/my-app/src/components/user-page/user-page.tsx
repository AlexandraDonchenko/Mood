import { FC, useState, useEffect, useMemo } from 'react';
import Moment from 'moment';
import { Diary, Entry } from './../../types';
import WelcomeUserPage from './../WelcomeUserPage/welcome-user-page';
import SentimentAnalysis from './../sentiment-analysis/sentiment-analysis';
interface Props {
  diary: Diary;
  addEntry: (diaryId: string, text: string) => void;
}

const UserPage: React.FC<Props> = ({ diary, addEntry }) => {
  const [entryFieldClicked, setEntryField] = useState<Boolean>(false);
  const [diaryEntry, setDiaryEntry] = useState<string>('');
  const [entries, setEntries] = useState<Entry[]>(diary.entries);
  function handleEntry(e: any) {
    setDiaryEntry(e.target.value);
  }
  useEffect(() => {
    console.log('hello', diary);
    setEntries(diary.entries);
  }, [diary]);
  console.log(diary, 'outside use');
  function toggle() {
    setEntryField(!entryFieldClicked);
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    if (diaryEntry !== '' && diary?._id) addEntry(diary?._id, diaryEntry);
    setDiaryEntry('');
    toggle();
  }

  return diary === undefined ? (
    <WelcomeUserPage />
  ) : (
    <div>
      <div>{diary.diaryName}</div>
      <button onClick={toggle}>Create new entry for this diary!</button>
      {entryFieldClicked === true ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              TELL ME HOW WAS YOUR DAY
              <input type="text" value={diaryEntry} onChange={handleEntry} />
            </label>
            <button type="submit" value="Submit" onSubmit={handleSubmit}>
              Create new Entry
            </button>
          </form>
        </div>
      ) : null}
      <div className="my-entries">
        {entries.map((entry: any) => {
          return (
            <div>
              <div>{Moment(entry.date).format('MMMM Do, YYYY')}</div>
              <div>{entry.text}</div>
            </div>
          );
        })}
      </div>
      <SentimentAnalysis entries={diary.entries}></SentimentAnalysis>
    </div>
  );
};
export default UserPage;
