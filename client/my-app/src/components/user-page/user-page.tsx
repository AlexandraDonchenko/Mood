import { FC, useState } from 'react';
import { createDocumentRegistry } from 'typescript';
import { Diary } from './../../types';
import WelcomeUserPage from './../WelcomeUserPage/welcome-user-page';
interface Props {
  diary: Diary | undefined;
  addEntry: (diaryId: string, text: string) => void;
}

const UserPage: React.FC<Props> = ({ diary, addEntry }) => {
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
              Create new Diary
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};
export default UserPage;
