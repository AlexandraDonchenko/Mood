import { Link } from '@reach/router';
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="text-link">
          MOOOOOOOOOD
        </Link>
      </div>
      <div className="buttons">
        <Link to="/sign-up" className="text-link">
          Sign up
        </Link>
        <Link to="/log-in" className="text-link">
          Log in
        </Link>
      </div>
    </header>
  );
};
export default Header;
