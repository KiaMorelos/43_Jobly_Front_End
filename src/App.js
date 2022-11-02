import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { decodeToken } from "react-jwt";
import JoblyApi from "./api/api";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/navbar/NavBar";
import AuthedUserContext from "./components/context/AuthedUserContext";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [token, setToken] = useLocalStorage("token");
  const [currentUser, setCurrentUser] = useState(null);
  const [appliedJobIds, setAppliedJobIds] = useState(new Set([]));

  async function login(username, password) {
    try {
      const response = await JoblyApi.login(username, password);
      setToken(response);
      return { message: "success" };
    } catch (err) {
      return { message: "failed!", err };
    }
  }

  async function signup(data) {
    try {
      const response = await JoblyApi.signup(data);
      setToken(response);
      return { message: "success" };
    } catch (err) {
      return { message: "failed!", err };
    }
  }

  const logout = () => {
    setToken(null);
    setCurrentUser(null);
  };

  useEffect(
    function findUser() {
      async function getCurrentUser() {
        if (token) {
          try {
            const { username } = decodeToken(token);
            JoblyApi.token = token;
            const response = await JoblyApi.getCurrentUser(username);
            const { applications } = response;
            setCurrentUser(response);
            setAppliedJobIds(new Set(applications));
          } catch (err) {
            setCurrentUser(null);
            return { message: "unauthorized" };
          }
        }
      }
      getCurrentUser();
    },
    [token]
  );

  function didUserAlreadyApply(id) {
    return appliedJobIds.has(id);
  }

  function applyToJob(id) {
    if (didUserAlreadyApply(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setAppliedJobIds(new Set([...appliedJobIds, id]));
  }
  return (
    <AuthedUserContext.Provider
      value={{ currentUser, setCurrentUser, didUserAlreadyApply, applyToJob }}
    >
      <div className="App">
        <BrowserRouter>
          <NavBar logout={logout} />
          <AppRoutes login={login} signup={signup} currentUser={currentUser} />
        </BrowserRouter>
      </div>
    </AuthedUserContext.Provider>
  );
}

export default App;
