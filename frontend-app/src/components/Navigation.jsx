import {Link} from 'react-router-dom'
import AuthenticationButton from './AuthenticationButton';
import { useAuth0 } from "@auth0/auth0-react";

export default function Navigation()
{
  const {user, isAuthenticated, isLoading} = useAuth0();
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Where2Pee</a>
        <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls='navbarNav' aria-expanded="false" aria-label='Toggle navigation'>
          <span className="navbar-toggler-icon">
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Kaart</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">Over</Link>
            </li>
            {isAuthenticated? <li className='nav-item'>
              <Link to="/admin" className='nav-link'>Admin</Link>
            </li>: null}
          </ul>
          <ul>
            <li className='navbar-right btn-nav'>
              <AuthenticationButton/>
            </li>
          </ul>
        </div>
      </div>

    </nav>
    
  )
}