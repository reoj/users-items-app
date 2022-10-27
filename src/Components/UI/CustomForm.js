import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/esm/Button'
import Modal from "react-bootstrap/Modal"

function CustomForm(props) {
  return (
    <Fragment>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="form_Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="User Name" />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeAction}>
          Close
        </Button>
        <Button variant="primary" onClick={props.saveAction}>
          Save changes
        </Button>
      </Modal.Footer>
    </Fragment>
  );
}

export default CustomForm;
