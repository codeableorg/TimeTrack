/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import InputInfoProject from "../components/input-info-project";
import ListMemberProject from "../components/list-member-project";
import { NewProjectProvider } from "../contexts/newProject";

function CreateProject() {
  const [stepCreation, setStepCreation] = React.useState(1);

  function nextStep() {
    setStepCreation(stepCreation + 1);
  }

  function beforeStep() {
    setStepCreation(stepCreation - 1);
  }

  let component = null;

  switch (stepCreation) {
    case 1:
      component = <InputInfoProject nextFn={nextStep} />;
      break;
    case 2:
      component = <ListMemberProject nextFn={nextStep} beforeFn={beforeStep} />;
      break;
    default:
      component = <InputInfoProject beforeFn={beforeStep} />;
      break;
  }

  return (
    <NewProjectProvider infoProject={{ nextStep, beforeStep }}>
      {component}
    </NewProjectProvider>
  );
}

export default CreateProject;
