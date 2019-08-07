/** @jsx jsx */
import React from "react";
import ReactDOM from "react-dom";
import { jsx } from "@emotion/core";

const modalBackground = {
  position: "fixed",
  top: "0",
  left: 230,
  bottom: "0",
  right: "0",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media (max-width:960px)": {
    left: 0
  }
};

const modalContainer = {
  position: "relative",
  top: "10rem",
  backgroundColor: "#ffffff",
  height: "176px",
  width: "50%",
  padding: 10,
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
  borderRadius: "0.5em",
  "@media (max-width:768px)": {
    width: "70%"
  },
  "@media (max-width:500px)": {
    width: "85%"
  }
};

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div css={modalBackground}>
      <div css={modalContainer}>{props.children}</div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
