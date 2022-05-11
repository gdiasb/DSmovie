import './navbar.style.css'
import { FiGithub } from 'react-icons/fi'

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary container-fluid">
      <div className="nav-content">
        <a className="navbar-brand nav-logo" href="#">
          DSmovie
        </a>
        <a href='#' className="nav-span link-dark">
          <FiGithub className='nav-git-logo' />
          @gdiasb
        </a>
      </div>
    </nav>
  );
}

export default Navbar