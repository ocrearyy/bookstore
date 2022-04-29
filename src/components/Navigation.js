import { CgProfile } from 'react-icons/cg';
import '../App.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="links">
        <h1>Bookstore CMS</h1>
        <ul className="nav-ul">
          <li><Link to="/books">BOOKS</Link></li>
          <li><Link to="/categories">CATEGORIES</Link></li>
        </ul>
      </div>
      <CgProfile className="icon" />
    </nav>
  );
}

export default Navigation;
