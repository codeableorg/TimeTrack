/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import InputInfoProject from "../components/input-info-project";
import ListMemberProject from "../components/list-member-project";

function CreateProject() {
  const [stepCreation, setStepCreation] = React.useState(1);

  function nextStep() {
    setStepCreation(stepCreation + 1);
  }

  switch (stepCreation) {
    case 1:
      return <InputInfoProject nextFn={nextStep} />;
    case 2:
      return <ListMemberProject />;
    default:
      return <InputInfoProject />;
  }
}

export default CreateProject;
