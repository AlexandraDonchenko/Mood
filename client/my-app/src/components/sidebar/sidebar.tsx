import { useState } from 'react';
import { Diary } from './../../types';
import './sidebar.css';
interface Props {
  createDiary: (name: string) => void;
  diaries: Diary[];
  getEntries: (diaryName: string) => void;
  // diaries: {
  //   diaryName: string;
  //   user: number;
  //   entries: {
  //     date: Date;
  //     text: string;
  //   }[];
  // }[];
}

const Sidebar: React.FC<Props> = ({ createDiary, diaries, getEntries }) => {
  const [modal, setModal] = useState(false);
  //const [diaries, setDiaries] = useState<Diary[]>([]);
  const [justName, setJustName] = useState<string>(''); // creates just a name for diary
  const [diaryName, setDiaryName] = useState<Diary>();
  const toggle = function () {
    setModal(!modal);
  };

  function handleDiaryButton(e: any) {
    console.log(e.target.value);
    getEntries(e.target.value);
  }

  function handleName(e: any) {
    console.log('I am target', e.target.value);
    setJustName(e.target.value);
    setDiaryName({ diaryName: e.target.value, entries: [] });
  }
  function handleDiary(e: React.FormEvent) {
    e.preventDefault();

    if (diaryName !== undefined) {
      createDiary(justName);
      console.log(diaries);
      setJustName('');
      toggle();
    }
  }
  return (
    <div className="sidebar">
      <button className="diary-create-button" onClick={toggle}>
        CREATE NEW DIARY
      </button>
      {modal ? (
        <div className="pop-up">
          <div className="form-box-for-user-b">
            <div className="request">CHOOOSE NAME FOR YOUR DIARY</div>
            <form className="diary-form" onSubmit={handleDiary}>
              <textarea
                placeholder="Name your diary"
                value={justName}
                onChange={handleName}
              />
              <button
                className="smaller-redirect"
                type="submit"
                value="Submit"
                onSubmit={handleDiary}
              >
                Create new Diary
              </button>
              <button className="smaller-redirect" onClick={toggle}>
                {' '}
                CLOSE
              </button>
            </form>
          </div>
        </div>
      ) : null}
      <div className="diaries">
        {diaries.map((diary) => {
          return (
            <button
              className="diary-button"
              key={diary._id}
              value={diary._id}
              onClick={handleDiaryButton}
            >
              {diary.diaryName}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default Sidebar;
