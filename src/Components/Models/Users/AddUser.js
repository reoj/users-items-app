import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";

function AddUser(props) {
    const namefieldRef = useRef()
    function onCloseHandle(oldData) {
        props.formController({
          ...oldData,
          onDisplay: false,
        });
      }
      function onSaveHandle(oldData){
        props.listController({name:namefieldRef.current.value})
        props.formController({
            ...oldData,
            onDisplay: false,
          });
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
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseHandle}>
          Close
        </Button>
        <Button variant="primary" onClick={onSaveHandle}>Save changes</Button>
      </Modal.Footer>
    </Form>
  );
}

export default AddUser;
