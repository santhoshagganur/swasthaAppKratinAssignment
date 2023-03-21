import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <img
      src="https://res.cloudinary.com/dkrgkqehf/image/upload/v1679329928/Free_Sample_By_Wix_gasnec.jpg"
      alt="swastha"
      className="logo"
    />
    <ul className="app-features-container">
      <Link to="/">
        <li className="nav-item"> Home </li>
      </Link>
      <Link to="/above65">
        <li className="nav-item"> Above65 </li>
      </Link>
      <Link to="/OnlineLabs">
        <li className="nav-item"> Online Labs </li>
      </Link>
    </ul>
  </nav>
)
export default Header
