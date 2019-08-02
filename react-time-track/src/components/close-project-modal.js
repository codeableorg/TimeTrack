import React from 'react';
import Modal from './modal';

function CloseProjectModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div>
        <h1>Are You Sure?</h1>
        <p>You are about to delete this project.</p>

        <div>
          <button onClick={props.onCloseProject} >
            Delete
          </button>
          <button onClick={props.toggleModal} >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default CloseProjectModal;
