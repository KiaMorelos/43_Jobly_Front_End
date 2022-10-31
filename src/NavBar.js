import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthedUserContext from "./AuthedUserContext";

function NavBar({ logout }) {
  const { currentUser } = useContext(AuthedUserContext);

  return (
    <nav>
      <NavLink to="/">Jobly</NavLink>
      {currentUser ? (
        <>
          <NavLink to="/companies">Companies</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/" onClick={logout}>
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
