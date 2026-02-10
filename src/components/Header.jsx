import { Link } from 'react-router';

function Header() {
  return (
    <header>
      <nav>
        <div className="nav-links">
          <Link to="/">home</Link>
          <Link to="about">about</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
