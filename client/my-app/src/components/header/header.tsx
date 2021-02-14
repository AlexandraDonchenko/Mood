import { Link } from '@reach/router';
import styles from'./Header.module.css'
import logo from './../../resources/logo-resized.png'
const Header: React.FC = () => {
  return (
    <div className={styles.header}>

      <div className={styles.logo}>
        <Link to="/" className="text-link">
        <img alt="logo" src={logo}/>
        </Link>
      </div>
      <div className={styles.buttons}>
        <Link className={styles.link}to="/sign-up">
          Sign up
        </Link>
        <Link className={styles.link} to="/log-in">
          Log in
        </Link>
      </div>
    </div>
  );
};
export default Header;
