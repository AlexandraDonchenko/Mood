import { FC } from 'react';
import WelcomeUserPage from './../WelcomeUserPage/welcome-user-page';
interface Props {
  entries: object[];
}

const UserPage: React.FC<Props> = ({ entries }) => {
  console.log('these are entries', entries);
  return <WelcomeUserPage />;
};
export default UserPage;
