import { Link } from '@reach/router';
const HeaderTwo: React.FC = () => {
  return (
    <header className="header-two">
      <div className="logo">
        <Link to="/" className="text-link">
          MOOOOOOOOOD
        </Link>
      </div>
    </header>
  );
};
export default HeaderTwo;
