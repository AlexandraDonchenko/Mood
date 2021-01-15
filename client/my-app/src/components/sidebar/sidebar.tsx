import { useState } from 'react';
import Obj from './../../apiServise';
//import Modal from './../modal./modal';
interface Diary {
  diaryName: string;
  entries:
    | [
        {
          date: Date;
          text: string;
        }
      ]
    | [];
}

function Sidebar() {
  const [modal, setModal] = useState(false);
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [justName, setJustName] = useState('');
  const [diaryName, setDiaryName] = useState<Diary>();
  //const [toSubmit, setSubmit] = useState(false);
  const toggle = function () {
    setModal(!modal);
  };
  const createDiary = async function (name: string) {
    const testEntry = await Obj.postEntrie({
      diaryName: name,
      user: 1,
      entries: [
        {
          date: new Date(),
          text: 'I really wish please was working',
        },
      ],
    });
    const data = testEntry;
    return data;
  };
  function handleName(e: any) {
    setJustName(e.target.value);
    setDiaryName({ diaryName: justName, entries: [] });
  }
  function handleDiary(e: React.FormEvent) {
    e.preventDefault();
    const oldDiaries = diaries;
    if (diaryName !== undefined) {
      setDiaries([...oldDiaries, diaryName]);
      console.log(createDiary(justName));
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
          return <button key={diary.diaryName}>{diary.diaryName}</button>;
        })}
      </div>
    </div>
  );
}
export default Sidebar;
