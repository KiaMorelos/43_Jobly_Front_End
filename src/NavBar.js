import { NavLink } from 'react-router-dom'

function NavBar(){
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/profile">Profile</NavLink>

            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
        </nav>
    )
}

export default NavBar;