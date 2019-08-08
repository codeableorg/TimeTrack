import React from "react";
import { logout } from "../services/session";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [loggedIn, setLoggedIn] = React.useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  React.useEffect(() => {
    if (loggedIn) localStorage.setItem("user", JSON.stringify(loggedIn));
    else localStorage.removeItem("user");
  }, [loggedIn]);

  const onLogin = userData => setLoggedIn(userData);
  const onLogout = () => {
    logout()
      .then(() => setLoggedIn(null))
      .catch(response => {
        console.log(response);
        setLoggedIn(null);
      });
  };

  const value = {
    data: loggedIn,
    onLogin: onLogin,
    onLogout: onLogout
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserProvider, UserContext };
