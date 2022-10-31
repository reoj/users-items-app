import React, { useContext, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import ModalContext from "../../../Context/modal-context";
import { useDispatch } from "react-redux";
import { edit } from "../../../Context/user-redux-slice";

function EditUser(props) {
  const modalCtx = useContext(ModalContext);
  const mc = modalCtx.setter;

  const namefieldRef = useRef();

  const dsp = useDispatch();

  function onCloseHandle(oldData) {
    mc({
      ...oldData,
      onDisplay: false,
    });
  }
  function onSaveHandle(oldData) {
    if (namefieldRef.current.value !== "") {
      dsp(edit({id:props.item.id, name:namefieldRef.current.value}));
      onCloseHandle(oldData);
    } else {
      namefieldRef.current.className = "form-control bg-danger";
    }
  }
  function onInputClarity(event) {
    event.target.className = "form-control";
  }

  return (
    <Form>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="form_Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="User Name"
            ref={namefieldRef}
            onFocus={onInputClarity}
            defaultValue={props.item.name}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onCloseHandle}>
          Close
        </Button>
        <Button variant="warning" onClick={onSaveHandle}>
          Save changes
        </Button>
      </Modal.Footer>
    </Form>
  );
}

export default EditUser;
