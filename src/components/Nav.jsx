import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="navbar_link">
            Camera
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="navbar_link">
            Gallery
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
