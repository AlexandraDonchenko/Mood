import Sidebar from './../sidebar/sidebar';
import WelcomeUserPage from './../WelcomeUserPage/welcome-user-page';
import './home-page.css';
function Homepage() {
  return (
    <div className="homepage">
      <Sidebar />
      <WelcomeUserPage />
    </div>
  );
}
export default Homepage;
