import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthedUserContext from "../context/AuthedUserContext";
import "./NavBar.css";
function NavBar({ logout }) {
  const { currentUser } = useContext(AuthedUserContext);

  return (
    <nav>
      <NavLink to="/" className="dontShowActive site-name">
        Jobly
      </NavLink>
      {currentUser ? (
        <>
          <NavLink to="/companies">Companies</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/" onClick={logout} className="dontShowActive">
            Logout {currentUser.firstName}
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </>
      )}
    </nav>
  );
}

export default NavBar;
