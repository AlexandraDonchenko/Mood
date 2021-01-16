import Sidebar from './../sidebar/sidebar';
import WelcomeUserPage from './../WelcomeUserPage/welcome-user-page';
import './home-page.css';
import Obj from './../../apiServise';
const createDiary = async function (name: string) {
  const testEntry = await Obj.postEntrie({
    diaryName: name,
    user: 1,
    entries: [{}],
  });
  const data = testEntry;
  return data;
};
function Homepage() {
  return (
    <div className="homepage">
      <Sidebar createDiary={createDiary} />
      <WelcomeUserPage />
    </div>
  );
}
export default Homepage;
