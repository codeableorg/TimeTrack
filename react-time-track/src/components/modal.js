/** @jsx jsx */
import React from "react";
import ReactDOM from "react-dom";
import { jsx } from "@emotion/core";
import { modalBackground, modalContainer } from "../components/ui";

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
		<div css={modalBackground}>
			<div css={modalContainer}>				
				{props.children}
			</div>
		</div>,
    document.getElementById('modal')
  );
}

export default Modal;