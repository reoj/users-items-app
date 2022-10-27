import React, { Fragment } from 'react'
import ActionButtons from '../../UI/ActionButtons'

function UserSingle(props) {
  return (
    <Fragment>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <ActionButtons/>
    </Fragment>
  )
}

export default UserSingle