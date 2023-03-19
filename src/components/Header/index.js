import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <h1 className="app-name"> Swastha </h1>
    <ul className="app-features-container">
      <Link to="/">
        <li className="nav-item"> Home </li>
      </Link>
      <Link to="/about">
        <li className="nav-item"> About </li>
      </Link>
      <Link to="/contact">
        <li className="nav-item"> Contact </li>
      </Link>
    </ul>
  </nav>
)
export default Header
