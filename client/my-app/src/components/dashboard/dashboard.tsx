import styles from './Dashboard.module.css';
import { navigate, Link} from '@reach/router';
import Header from '../header/header';
import picture from './../../resources/undraw_Personal_notebook_re_d7dc.svg'
function DashBoard(props: object) {
  console.log(props);
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    navigate('/sign-up');
  }
  return (
    <div className={styles.dashboard}>
      <Header />
      <div className={styles.welcomecontainer}>
        <div className={styles.welcome}>WELCOME </div>
        <div className={styles.dashcomponent}>
          <img src={picture} alt='diary'></img>
          <div className={styles.description}>
            Mood is diary app that helps you track your mood by using sentiment
            analysis.
          </div>
        </div>
        <div className={styles.redirect}>
          <Link className={styles.redirect} to='/sign-up'>
            Sign up
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default DashBoard;
