import { useState } from 'react';
import { Diary } from './../../types';
import './Sidebar.module.css';
import styles from './Sidebar.module.css'
interface Props {
  createDiary: (name: string) => void;
  diaries: Diary[];
  getEntries: (diaryName: string) => void;
}

const Sidebar: React.FC<Props> = ({ createDiary, diaries, getEntries }) => {
  const [modal, setModal] = useState(false);
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
    <div className={styles.sidebar}>
      <button className={styles.createDiary} onClick={toggle}>
        CREATE NEW DIARY
      </button>
      {modal ? (
        <div className={styles.popup}>
          <div className={styles.formbox}>
            <div className={styles.request}>CHOOOSE NAME FOR YOUR DIARY</div>
            <form className={styles.form} onSubmit={handleDiary}>
              <textarea
                placeholder="Name your diary"
                value={justName}
                onChange={handleName}
              />
              <button
                className={styles.redirect}
                type="submit"
                value="Submit"
                onSubmit={handleDiary}
              >
                Create new Diary
              </button>
              <button className={styles.redirect} onClick={toggle}>
                {' '}
                CLOSE
              </button>
            </form>
          </div>
        </div>
      ) : null}
      <div className={styles.diaries}>
        {diaries.map((diary) => {
          return (
            <button
              className={styles.diarybutton}
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
