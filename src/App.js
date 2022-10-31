import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { decodeToken } from "react-jwt";
import JoblyApi from "./api/api";
import "./App.css";
import AppRoutes from "./AppRoutes";
import NavBar from "./NavBar";
import AuthedUserContext from "./AuthedUserContext";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [token, setToken] = useLocalStorage("token");
  const [currentUser, setCurrentUser] = useState(null);

  async function login(username, password) {
    try {
      const response = await JoblyApi.login(username, password);
      setToken(response);
      return { message: "login succeeded" };
    } catch (err) {
      return { message: "login failed!", err };
    }
  }

  async function signup(data) {
    try {
      const response = await JoblyApi.signup(data);
      setToken(response);
      return { message: "signup succeeded" };
    } catch (err) {
      return { message: "signup failed!", err };
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
            setCurrentUser(response);
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

  return (
    <AuthedUserContext.Provider value={{ currentUser }}>
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
