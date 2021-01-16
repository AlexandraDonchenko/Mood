import { useState } from 'react';
import { Diary } from './../../types';
//import Modal from './../modal./modal';
interface Props {
  createDiary: (name: string) => Promise<any>;
}

const Sidebar: React.FC<Props> = ({ createDiary }) => {
  const [modal, setModal] = useState(false);
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [justName, setJustName] = useState<string>('');
  const [diaryName, setDiaryName] = useState<Diary>();
  //const [toSubmit, setSubmit] = useState(false);
  const toggle = function () {
    setModal(!modal);
  };

  function handleName(e: any) {
    console.log('I am target', e.target.value);
    setJustName(e.target.value);
    setDiaryName({ diaryName: e.target.value, entries: [] });
  }
  function handleDiary(e: React.FormEvent) {
    e.preventDefault();
    const oldDiaries = diaries;
    if (diaryName !== undefined) {
      setDiaries([...oldDiaries, diaryName]);
      createDiary(justName);
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
        {console.log(diaries)}
        {diaries.map((diary) => {
          return <button key={diary.diaryName}>{diary.diaryName}</button>;
        })}
      </div>
    </div>
  );
};
export default Sidebar;
