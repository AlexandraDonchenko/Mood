import { FC } from 'react';
import { Diary } from './../../types';
import WelcomeUserPage from './../WelcomeUserPage/welcome-user-page';
interface Props {
  diary: Diary | undefined;
}

const UserPage: React.FC<Props> = ({ diary }) => {
  console.log(diary);
  return diary === undefined ? (
    <WelcomeUserPage />
  ) : (
    <div>
      <div>{diary.diaryName}</div>
    </div>
  );
};
export default UserPage;
