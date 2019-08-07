/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Modal from "./modal";

import { Button } from "./ui";

function CloseProjectModal(props) {
  const buttonStyle = {
    width: 135,
    margin: "0 10px",
    "@media (max-width: 768px)": {
      width: 95,
      margin: "0 10px"
    }
  };

  const fieldsetStyle = {
    border: "none",
    padding: "12px 24px",
    textAlign: "center",
    "@media (max-width: 500px)": {
      padding: "12px 8px",
      width: ""
    }
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div>
        <h1>Are You Sure?</h1>
        <hr />
        <p css={{ marginBottom: ".5em", fontSize: "1.15em" }}>
          You are about to close this project.
        </p>

        <fieldset css={fieldsetStyle}>
          <Button css={buttonStyle} onClick={props.onCloseProject}>
            Close
          </Button>
          <Button css={buttonStyle} onClick={props.toggleModal}>
            Cancel
          </Button>
        </fieldset>
      </div>
    </Modal>
  );
}

export default CloseProjectModal;
