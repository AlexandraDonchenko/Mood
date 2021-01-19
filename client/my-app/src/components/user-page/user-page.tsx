import { FC, useState, useEffect, useMemo } from 'react';
import Moment from 'moment';
import { Diary, Entry } from './../../types';
import WelcomeUserPage from './../WelcomeUserPage/welcome-user-page';
import SentimentAnalysis from './../sentiment-analysis/sentiment-analysis';

import './user-page.css';
interface Props {
  diary: Diary;
  addEntry: (diaryId: string, text: string) => void;
}

const UserPage: React.FC<Props> = ({ diary, addEntry }) => {
  const [entryFieldClicked, setEntryField] = useState<Boolean>(false);
  const [diaryEntry, setDiaryEntry] = useState<string>('');
  const [entries, setEntries] = useState<Entry[]>(diary.entries.slice(1));
  function handleEntry(e: any) {
    setDiaryEntry(e.target.value);
  }
  function toggle() {
    setEntryField(!entryFieldClicked);
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    if (diaryEntry !== '' && diary?._id) addEntry(diary?._id, diaryEntry);
    setDiaryEntry('');
    toggle();
  }
  useEffect(() => {
    setEntries(diary.entries.slice(1));
  }, [diary]);

  return diary === undefined ? (
    <WelcomeUserPage />
  ) : (
    <div>
      <div className="diaryName">{diary.diaryName}</div>
      <div>
        <button className="redirect" onClick={toggle}>
          Create new entry for this diary!
        </button>
      </div>

      {entryFieldClicked === true ? (
        <div className="form-box-for-user">
          <form className="diary-form" onSubmit={handleSubmit}>
            <div className="Text">
              {Moment(new Date()).format('MMMM Do, YYYY')}
            </div>
            <textarea
              placeholder="Remember, be nice!"
              value={diaryEntry}
              onChange={handleEntry}
            />
            <button
              className="redirect"
              type="submit"
              value="Submit"
              onSubmit={handleSubmit}
            >
              Create new Entry
            </button>
          </form>
        </div>
      ) : (
        <div>
          <SentimentAnalysis entries={diary.entries}></SentimentAnalysis>
          <div className="my-entries">
            {entries.map((entry: any) => {
              return (
                <div className="entry-box">
                  <div className="date">
                    {Moment(entry.date).format('DD.MM')}
                  </div>
                  <div className="diary-entry-text">
                    <div className="texti">{entry.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default UserPage;
