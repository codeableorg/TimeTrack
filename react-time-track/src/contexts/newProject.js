import React from "react";

const NewProjectContext = React.createContext();

function NewProjectProvider({ infoProject, children }) {
  return (
    <NewProjectContext.Provider value={infoProject}>
      {children}
    </NewProjectContext.Provider>
  );
}

function useNewProjectConsumer() {
  return React.useContext(NewProjectContext);
}

export { NewProjectProvider, useNewProjectConsumer };
