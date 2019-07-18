import React from "react";

const UserContext = React.createContext();

function UserProvider({ user, setUser, children }) {
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useConsumer() {
  return React.useContext(UserContext);
}

export { UserProvider, useConsumer };
