/** @jsx jsx */
import React from 'react';
import { jsx } from "@emotion/core";
import Modal from './modal';

import {Button} from "./ui"

function CloseProjectModal(props) {
  const buttonStyle = {
    width: 135,
    margin: "0 10px",
    "@media (max-width: 500px)": {
      width: 95
    }
  };

  const fieldsetStyle = {
    border: "none",
    padding: "12px 30px",
    textAlign: "center",
    "@media (max-width: 800px)": {
      padding: "12px 15px",
      width: ""
    },
    "@media (max-width: 500px)": {
      padding: "12px 8px",
      width: ""
    },
    "@media (max-width: 450px)": {
      padding: "16px 8px",
      width: ""
    }
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div>
        <h1 css={{marginLeft: "10px"}}>Are You Sure?</h1>
        <p css={{marginLeft: "10px"}}>You are about to delete this project.</p>

        <fieldset css={fieldsetStyle}>
          <Button css={buttonStyle} onClick={props.onCloseProject} >
            Delete
          </Button>
          <Button css={buttonStyle} onClick={props.toggleModal} >
            Cancel
          </Button>
        </fieldset>
      </div>
    </Modal>
  );
}

export default CloseProjectModal;
