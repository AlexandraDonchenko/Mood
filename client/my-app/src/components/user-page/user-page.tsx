import { FC, useState, useEffect } from 'react';
import Moment from 'moment';
import { Diary, Entry } from './../../types';
import WelcomeUserPage from './../WelcomeUserPage/welcome-user-page';
interface Props {
  diary: Diary | undefined;
  addEntry: (diaryId: string, text: string) => void;
}

const UserPage: React.FC<Props> = ({ diary, addEntry }) => {
  let entries: Entry[] = diary ? diary.entries : [];

  const [entryFieldClicked, setEntryField] = useState<Boolean>(false);
  const [diaryEntry, setDiaryEntry] = useState<string>('');
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
    </div>
  );
};
export default UserPage;
