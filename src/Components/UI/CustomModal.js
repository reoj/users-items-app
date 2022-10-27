import React, { Fragment } from 'react'

import Modal from "react-bootstrap/Modal"
import CustomForm from './CustomForm';

function CustomModal(props) {
    const st = props.status;

    function onCloseHandle(oldData) {
        props.controller({
            ...oldData,
            onDisplay: false
        })
    }
    function saveData(params) {
        
    }
  return (
    <Modal show={st.onDisplay} onHide={onCloseHandle}>
      <Modal.Header closeButton>
        <Modal.Title>{st.title}</Modal.Title>
      </Modal.Header>

      <CustomForm closeAction ={onCloseHandle} saveAction = {saveData}></CustomForm>
    </Modal>
  )
}

export default CustomModal