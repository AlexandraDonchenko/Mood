import './dashboard.css';
import { navigate } from '@reach/router';
function DashBoard(props: object) {
  console.log(props);
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    navigate('/sign-up');
  }
  return (
    <div>
      <div>
        <div className="welcome-container">
          <div className="welcome">WELCOME </div>
          <div className="description">
            Mood is diary app that helps you track your mood by using sentiment
            analysis.
          </div>
          <button className="redirect" onClick={handleClick}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
