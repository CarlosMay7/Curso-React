import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Use Context</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                
                <NavLink 
                    className={({isActive}) => `nav-item ${isActive ? 'active' : ''}` }
                    to="/"    
                >
                    Home
                </NavLink>
                <NavLink 
                    className={({isActive}) => `nav-item ${isActive ? 'active' : ''}` }
                    to="/about"    
                >
                    About
                </NavLink>
                <NavLink 
                    className={({isActive}) => `nav-item ${isActive ? 'active' : ''}` }
                    to="/login"    
                >
                    Login
                </NavLink>
            </ul>
            </div>
        </div>
        </nav>
)
}
