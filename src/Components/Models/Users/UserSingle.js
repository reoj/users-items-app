import React, { Fragment } from 'react'
import ActionButtons from '../../UI/ActionButtons'

function UserSingle(props) {
  return (
    <tr>
        <td>{props.idn}</td>
        <td>{props.name}</td>
        <ActionButtons/>
    </tr>
  )
}

export default UserSingle