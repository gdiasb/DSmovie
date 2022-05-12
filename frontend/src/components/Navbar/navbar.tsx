import './navbar.style.css'
import { FiGithub } from 'react-icons/fi'

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary container-fluid">
      <div className="nav-content">
        <a className="navbar-brand nav-logo" href="#">
          MovieNow
        </a>
        <a href='#' className="nav-span">
          {/* <IconContext.Provider value={{className:'nav-github-logo'}}> */}
          <FiGithub className='nav-github-logo'/>
          {/* </IconContext.Provider> */}
          @gdiasb
        </a>
      </div>
    </nav>
  );
}

export default Navbar