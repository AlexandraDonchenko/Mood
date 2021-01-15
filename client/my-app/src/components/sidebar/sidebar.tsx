import { useState } from 'react';
//import Modal from './../modal./modal';
interface Diary {
  diaryName: string;
  entries:
    | [
        entrie: {
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
  function handleName(e: any) {
    setJustName(e.target.value);
    setDiaryName({ diaryName: justName, entries: [] });
  }
  function createDiary(e: React.FormEvent) {
    e.preventDefault();
    const oldDiaries = diaries;
    if (diaryName !== undefined) {
      setDiaries([...oldDiaries, diaryName]);
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
            <form onSubmit={createDiary}>
              <label>
                NAME YOUR DIARY
                <input type="text" value={justName} onChange={handleName} />
              </label>
              <button type="submit" value="Submit" onSubmit={createDiary}>
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
