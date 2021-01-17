import { useState } from 'react';
import { Diary } from './../../types';
//import Modal from './../modal./modal'; // not using modal, to be deleted later
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
    getEntries(e.target.value);
  }

  function handleName(e: any) {
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
    <div>
      <button onClick={toggle}>CREATE NEW DIARY</button>
      {modal ? (
        <div>
          <div>
            <span>CHOOOSE NAME FOR YOUR DIARY</span>
            <form onSubmit={handleDiary}>
              <label>
                NAME YOUR DIARY
                <input type="text" value={justName} onChange={handleName} />
              </label>
              <button type="submit" value="Submit" onSubmit={handleDiary}>
                Create new Diary
              </button>
              <button onClick={toggle}> CLOSE</button>
            </form>
          </div>
        </div>
      ) : null}
      <div className="diaries">
        {diaries.map((diary) => {
          console.log(diary._id);
          return (
            <button
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
