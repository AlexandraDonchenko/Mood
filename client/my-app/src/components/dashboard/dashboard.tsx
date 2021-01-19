import './dashboard.css';
import { navigate } from '@reach/router';
import Header from '../../header';
function DashBoard(props: object) {
  console.log(props);
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    navigate('/sign-up');
  }
  return (
    <div className="dashboard">
      <Header />
      <div className="welcome-container">
        <div className="welcome">WELCOME </div>
        <div className="dash-component">
          <div className="description">
            Mood is diary app that helps you track your mood by using sentiment
            analysis.
          </div>
          <div className="butto-div">
            <button className="redirect" onClick={handleClick}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
