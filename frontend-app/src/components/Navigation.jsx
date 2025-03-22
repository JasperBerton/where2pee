import {Link} from 'react-router-dom'

export default function Navigation()
{
  return(
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Where2Pee</a>
        <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls='navbarNav' aria-expanded="false" aria-label='Toggle navigation'>
          <span className="navbar-toggler-icon">
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Kaart</Link>
            </li>
          </ul>
        </div>
      </div>

    </nav>
    
  )
}