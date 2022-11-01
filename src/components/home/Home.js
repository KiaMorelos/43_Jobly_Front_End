import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthedUserContext from "../context/AuthedUserContext";
function Home() {
  const { currentUser } = useContext(AuthedUserContext);
  return (
    <>
      <h1>The place to find jobs</h1>
      <div>
        {currentUser ? (
          <h2>Welcome {currentUser.firstName}!</h2>
        ) : (
          <Link>Sign Up</Link>
        )}
      </div>
    </>
  );
}

export default Home;
