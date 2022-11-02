import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthedUserContext from "../context/AuthedUserContext";
import "./Home.css";
function Home() {
  const { currentUser } = useContext(AuthedUserContext);
  return (
    <div className="homeContainer">
      <div className="overlay-box">
        <div className="overlay">
          <h1 className="lead">
            {currentUser
              ? `Welcome, ${currentUser.firstName}`
              : "Jobly is the last recruiter you'll ever need"}
            .
          </h1>
          <p className="lead">
            {currentUser
              ? "Jobly is your best bet to look for jobs at top companies"
              : "Apply for / recruit for jobs at top companies"}
          </p>
          <div>
            {currentUser ? (
              <Link to="/jobs" className="homeButtons">
                Look for a job
              </Link>
            ) : (
              <Link to="/signup" className="homeButtons">
                Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
