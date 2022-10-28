import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";

function AddItem(props) {
  const descfieldRef = useRef();
  const ownerfieldRef = useRef();

  function onCloseHandle(oldData) {
    props.formController({
      ...oldData,
      onDisplay: false,
    });
  }
  function onSaveHandle(oldData) {
    const emptyFields = checkNoNulls([descfieldRef, ownerfieldRef])
    if(emptyFields.length !== 0){   
      emptyFields.forEach(f => {        
        f.current.className = "form-control bg-danger"
      });
      return;
    }
    props.newObjectSetter({
      desc: descfieldRef.current.value,
      owner: ownerfieldRef.current.value,
    });
    onCloseHandle(oldData)
  }
  function checkNoNulls(arrayOfRefs) {
    const allEmptyFields = []
    arrayOfRefs.forEach( r => {
      if(r.current.value === ""){
        allEmptyFields.push(r)
      }
    });
    return(allEmptyFields)
  }
  function onInputClarity(event) {
    // event..className = "form-control"
    event.target.className = "form-control"
  }
  return (
    <Form>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="form_Desc">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Item Description"
            ref={descfieldRef}
            onFocus={onInputClarity}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="form_Owner">
          <Form.Label>Owner</Form.Label>
          <Form.Control
            type="text"
            placeholder="Numeric ID of owner"
            ref={ownerfieldRef}
            onFocus={onInputClarity}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseHandle}>
          Close
        </Button>
        <Button variant="primary" onClick={onSaveHandle}>
          Save changes
        </Button>
      </Modal.Footer>
    </Form>
  );
}

export default AddItem;
