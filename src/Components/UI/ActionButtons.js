import React, { Fragment } from 'react'
import Button from 'react-bootstrap/esm/Button'

function ActionButtons(props) {
  return (
    <Fragment>
        <td><Button onClick={props.clickForEdit} variant='warning'>Edit</Button></td>
        <td><Button onClick={props.clickForDel} variant='danger'>Delete</Button></td>
    </Fragment>
  )
}

export default ActionButtons